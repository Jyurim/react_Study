```jsx
import { sha512 } from "js-sha512";

import reduxStore from "../storage/reduxStore";
import UIStore from "../storage/UIStore";
import UserStorage from "../storage/UserStorage";
import constraints from "./constraints";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type statusResponse = {
  success: boolean;
  errors?: string;
};
type dataResponse<T = object> = {
  data: T;
} & statusResponse;

function fetchAPI<T extends statusResponse>(
  method: Method,
  url: string,
  body?: object,
  showLoadingOverlay?: boolean,
): Promise<T> {
  if (showLoadingOverlay) UIStore.showLoadingOverlay();

  const token = reduxStore.getState().user;
  const category = reduxStore.getState().userCategory;

  const abortController = new AbortController();
//네트워크 요청(fetch API 등)이나 타이머와 같은 비동기 작업을 취소하려는 경우

  const abortSignal = abortController.signal;
  setTimeout(() => abortController.abort(), 5000);

  const options: RequestInit = {
    method: method,
    signal: abortSignal,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token != undefined && token.token != undefined) {
    // @ts-ignore
    options.headers["x-auth"] = token.token;
    // @ts-ignore
    options.headers["x-timestamp"] = Math.floor(Date.now() / 1000);
    // @ts-ignore
    options.headers["x-sign"] = sha512(`${options.headers["x-timestamp"]}${token.privKey}`);
  }
  if (category != null) {
    // @ts-ignore
    options.headers["x-category"] = category.categoryId;
    // @ts-ignore
    options.headers["x-major"] = category.majorId;
  }

  if (method != "GET") {
    options.body = JSON.stringify(body);
  }

  const url_complete = `${constraints.SERVER_URL}${url}`;
  return fetch(url_complete, options)
    .catch(err => {
      if (err.name && (err.name === "AbortError" || err.name === "TimeoutError")) {
        return Promise.reject("서버와 통신에 실패 했습니다 (Timeout)");
      }

      return Promise.reject("서버와 통신 중 오류가 발생했습니다.");
    })
    .then(res => {
      // 특수 처리 (로그인 실패시에도 401이 들어옴)
      // 로그인의 경우는 바로 내려 보냄
      if (url == "/user/login") {
        return res.json();
      }

      if (res.status === 401) {
        // 로그인 안됨 (unauthorized)
        UserStorage.removeUserData();
        return Promise.reject("로그인 토큰이 만료되었습니다.");
      }

      return res.json();
    })
    .then(json => {
      const resp = json as T;

      if (json.status !== true && resp.success === false) {
        return Promise.reject(resp.errors ?? json.message);
      }

      return Promise.resolve(resp);
    })
    .finally(() => {
      if (showLoadingOverlay) UIStore.hideLoadingOverlay();
    });
}

function GetAPI<T extends statusResponse = dataResponse>(
  url: string,
  params?: Record<string, string | number>,
  showLoadingOverlay: boolean = false,
) {
  if (params != undefined) {
    const urlParams = new URLSearchParams();
    Object.keys(params)
      .filter(key => params[key] !== undefined)
      .forEach(key => urlParams.append(key, params[key].toString()));

    url = `${url}?${urlParams.toString()}`;
  }

  return fetchAPI<T>("GET", url, undefined, showLoadingOverlay);
}
function PostAPI<T extends statusResponse = dataResponse>(
  url: string,
  body?: object,
  showLoadingOverlay: boolean = false,
) {
  return fetchAPI<T>("POST", url, body, showLoadingOverlay);
}
function PutAPI<T extends statusResponse = dataResponse>(
  url: string,
  body?: object,
  showLoadingOverlay: boolean = false,
) {
  return fetchAPI<T>("PUT", url, body, showLoadingOverlay);
}
function DeleteAPI<T extends statusResponse = dataResponse>(
  url: string,
  body?: object,
  showLoadingOverlay: boolean = false,
) {
  return fetchAPI<T>("DELETE", url, body, showLoadingOverlay);
}
function PatchAPI<T extends statusResponse = dataResponse>(
  url: string,
  body?: object,
  showLoadingOverlay: boolean = false,
) {
  return fetchAPI<T>("PATCH", url, body, showLoadingOverlay);
}

export type { dataResponse, statusResponse };
export { DeleteAPI, GetAPI, PatchAPI, PostAPI, PutAPI };
```

## AbortController

웹 요청을 취소할 수 있게 해주는 기능

보통 웹에서 요청을 일단 보내면 이후에 필요 없어져도 취소할 방법이 없어서 그냥 요청은 그대로 두고 응답 받은 내용을 사용하는 식으로만 구현

간단한 HTTP 요청은 응답이 꽤 빠르기 때문에 괜찮지만 무거운 요청의 경우 불필요한 네트워크 트래픽을 낭비하게 되거나 연결을 차지하고 있으므로 취소하는 것이 좋다.

```tsx
const abortController = new AbortController();
const abortSignal = abortController.signal;
setTimeout(() => abortController.abort(), 5000);

const options: RequestInit = {
    method: method,
    signal: abortSignal,
    headers: {
      "Content-Type": "application/json",
    },
 };
```

- `new AbortController()` 를 통해 생성한 다음 생성된 인스턴스에서 `signal` 프로퍼티로 `fetch()` 같은 DOM 요청과 통신할 수 있다.
- `abortController.abort()`를 실행하면 `abortController.signal`이 abort 이벤트를 발생시킨다.
- 이 이벤트가 발생했다는 의미로 abortController.signal.abort가 true가 된다.

[AbortController로 요청 취소하기 :: Outsider's Dev Story](https://blog.outsider.ne.kr/1602)

## Header 추가

```tsx
if (token != undefined && token.token != undefined) {
    // @ts-ignore
    options.headers["x-auth"] = token.token;
    // @ts-ignore
    options.headers["x-timestamp"] = Math.floor(Date.now() / 1000);
    // @ts-ignore
    options.headers["x-sign"] = sha512(`${options.headers["x-timestamp"]}${token.privKey}`);
  }
 if (category != null) {
    // @ts-ignore
    options.headers["x-category"] = category.categoryId;
    // @ts-ignore
    options.headers["x-major"] = category.majorId;
  }
```

## Promise

### Promise 3가지 상태

- Pending(대기)
    
    : 비동기 처리 로직이 아직 완료되지 않은 상태
    
      초기 상태, neither fulfilled nor rejected
    
- Fulfilled(이행): 비동기 처리가 완료되어 Promise가 결과값을 반환해준 상태
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태

### Pending

`new Promise()` 메서드를 호출하면 대기(Pending) 상태가 된다.

메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백함수의 인자는 resolve, reject 이다.

### Reject

```tsx
fetch(url_complete, options)
    .catch(err => {
      if (err.name && (err.name === "AbortError" || err.name === "TimeoutError")) {
        return Promise.reject("서버와 통신에 실패 했습니다 (Timeout)");
      }

      return Promise.reject("서버와 통신 중 오류가 발생했습니다.");
    })
```

### Fulfilled

`resolve()`를 실행하면 이행(Fulfilled) 상태가 된다.

```tsx
.then(json => {
      const resp = json as T;

      if (json.status !== true && resp.success === false) {
        return Promise.reject(resp.errors ?? json.message);
      }

      return Promise.resolve(resp);
    })
```

이행상태가 되면 `then()`을 이용하여 처리 결과 값을 받을 수 있다.

## URLSearchParams

주소창의 경로를 다룰 수 있는 브라우저 내장 객체

### 쿼리 스트링(queryString)

검색 파라미터(search parametsers) 라고도 불린다.

URL에서 경로(pathname) 바로 다음에 나오는 ? 기호로 시작하는 문자열.

검색 뿐 아니라 필터링(filter), 페이지네이션(pagenation), 정렬(sort) 등 다양한 용도로 사용된다.

보통 웹 서버에서 URL의 쿼리 스트링을 분석하여 요청한 리소스를 응답하기 전에 다양한 추가 작업을 수행할 수 있다.

쿼리 스트링에는 ?key1=value1&key2=value2&... 형태로 여러 개의 키와 값의 쌍을 `&` 기호로 구분하여 매개변수를 명시할 수 있다.

매개변수의 개수가 많아지면 사람의 눈으로 읽기가 쉽지 않고 매개변수에 다국어나 특수 문자가 포함되어 있으면 인코딩도 신경을 써야 한다. 

URL 명세에 따르면 쿼리 스트링은 `?key=value1&key=value2`와 같이 동일한 키에 여러 개의 값을 할당하는 것도 허용한다. 이 부분도 처리할 때도 경계 조건을 잘 고려하지 않으면 버그로 이어지기 쉽다.

URL API에서 제공하는 `URLSearchParams`를 사용하여 좀 더 안전하게 쿼리 스트링을 다룰 수 있게 되었다.

[자바스크립트의 URLSearchParams로 쿼리 스트링 다루기](https://www.daleseo.com/js-url-search-params/)

### URLSearchParams size

쿼리 스트링에 얼마나 많은 매개변수가 들어있는지 알 수 있다.

예시)

```jsx
const searchParams = new URLSearchParams("mode=dark&page=1&draft=false");
searchParams.size; // 3
```

한 가지 주의할 부분은 동일한 키에 여러 개의 값이 주어진 경우, 값의 개수를 기준으로 size 속성이 계산된다.

```jsx
const searchParams = new URLSearchParams("sort=date&sort=email");
searchParams.size; // 2
```

유일한 키의 개수가 필요하면 set을 이용해서 직접 구해야 한다.

```jsx
[...new Set(searchParams.keys())].length; // 1
```

### URLSearchParams 객체의 Method

`toString()`: 쿼리 스트링 맨 앞에 붙는 **?** 기호 생략한 나머지만 문자열로 변환한다.

`append()` : 기존 파라미터에 새로운 값을 하나씩 추가

append(key, param)  // key=param 

```tsx
if (params != undefined) {
    const urlParams = new URLSearchParams();
    Object.keys(params)
      .filter(key => params[key] !== undefined)
      .forEach(key => urlParams.append(key, params[key].toString()));

    url = `${url}?${urlParams.toString()}`;
  }
```

---

`set()`: 기존 값을 지우고 새로운 값 추가

`get()`: 첫번째 값만 반환

`get All()`: 모든 값을 배열로 반환

`delete()`: 파라미터를 삭제, 인자로 키를 넘기면 해당 키에 해당하는 모든 값이 삭제

`has()`: 특정 파라미터의 존재 여부를 알고 싶을 때

---

`Object.key():` object 에서 직접 찾은 열거 가능한 문자열 키 속성 이름에 해당하는 문자열을 요소로 하는 배열을 반환

[Object.keys() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
