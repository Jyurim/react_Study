# useState

- 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해준다. (만약 함수형 컴포넌트에서 상태를 관리해야되는 일이 발생했을때 사용하면 된다.)
- 하나의 상태 값만 관리를 할 수 있기 때문에 컴포넌트에서 관리해야 할 상태가 여러 개면 useState를 여러 번 사용해야한다.

```tsx
const [state, setState] = useState(initialValue);
```

첫번째 매개변수로 state의 초기값을 설정한다.

컴포넌트 상태를 바꾸고 싶을 때마다 setState 함수의 첫번째 매개변수로 바꿔줄 값을 넘겨주면 다음 렌더링 시 새로운 상태가 컴포넌트에 반영된다.

setState의 첫번째 매개변수로 함수를 넘겨주면 그 함수는 이전 상태를 매개변수로 해서 새로운 상태를 반환하는 형태여야 한다.

1. 초기값이 상태에 반영된다.
2. 변경할 값을 setState 함수의 인수로 넘겨준다.
3. 새로운 값이 상태에 반영된다.
![images_gwak2837_post_7c8c052f-f504-4511-9f7e-885e83e37a6f_image](https://github.com/jmlee119/react_Study/assets/68285285/4dfc7f0f-0e76-4ad0-ae23-54cbc67383d4)

```jsx
function App() {
  const [count ,setCount] = useState(0);// 초기값

  const onClickIncrement = () => {
    setCount(count+1)
  };

  const onClickDecrement = () => {
    setCount(count-1)
  };

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={onClickIncrement}>증가</button>
      <button onClick ={onClickDecrement}>감소</button>
    </div>
  );
}
```

---

# useEffect

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포는트의 componentDidMount + componentDidUpdate

useEffct는 2개의 매개변수를 가지는 데

첫 번째: 컴포넌트 레이아웃 배치와 화면 그리기가 끝난 후 실행될 함수

두 번째: 의존성 배열

첫 번째 인자의 내부는 effect 함수라고 부르고, 첫 번째 인자가 반환하는 함수는 clean-up 함수라고 부른다.

첫번째 인자로 주어진 함수를 실행하기 전에 의존성 배열의 원소가 변경됐는지 확인한다.

만약 하나도 변경되지 않았으면 그 렌더링 시전에서는 useEffect를 실행하지 않는다.

하지만 의존성 배열의 원소가 하나라도 변경됐으면 useEffect를 실행한다.

이런 원리로 인해 의존성 배열의 빈 배열로 설정하면 해당 useEffect 함수는 컴포넌트를 Mount 하는 시점과 UnMount 하는 시점에만 실행된다.

컴포넌트는 기본적으로 **Mount → Update(반복) → UnMount** 의 생애주기를 가진다.

- Mount: 컴포넌트 구조가 HTML DOM에 존재하는 상태

                   (화면에 보이는 상태)

- 컴포넌트 DOM 구조나 내용이 변경될 때마다 **업데이트** 과정을 거치며
- UnMount: 컴포넌트 구조가 HTML DOM에서 제거된 상태

                      (화면에 안 보이는 상태)

### 1. Mount 될 때만 실행하고 싶을 때

useEffect에서 설정한 함수 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에 실행할 필요 없는 경우

두번째 파라미터에 빈 배열을 넣어주면 된다.

```tsx
useEffect(() => {
    // ...
  }, []);
```

### 2.  특정 값이 업데이트 될 때만 실행하고 싶을 때

두번째 파라미터 배열에 해당 값의 변수를 넣어주면 된다.

```tsx
useEffect(() => {
    if (isUserDataLoading) setShowImage(true);
    else
      setTimeout(() => {
        setShowImage(false);
      }, 1000);
  }, [isUserDataLoading]);

```

```jsx
const listSortCriterion = (): Promise<dataResponse> =>
  GetAPI<dataResponse>(`/board/sortCriterion/`);

const [sortType, setsortType] = React.useState<SortType[]>([]);

  useEffect(() => {
    listSortCriterion()
      .then(data => {
        setsortType(data.data as SortType[]);
      })
      .catch(err => alert(err));
  }, [boardType]);
```

글리스트를 부르는 예시

`boardType` 이 변경시에만 callback 함수가 호출된다

```tsx
const pageFunc = async () => {
    setPage(page + 1);
    await listArticle(boardType.id, page, 10, 10, sort, -1).then(data => {
      setboardData(boardData.concat(data.data.list as BoardArticle[]));
    });
  };
```

```jsx
const [refreshing, setRefreshing] = useState(false);
<FlatList
        ...
            <Pressable onPress={() => detailContent(board)}>
              <PostSummary post={board} boardType={boardType} />
            </Pressable>
          ...
        )}
        onEndReached={() => pageFunc()}
			//페이지 끝에 다달았을때 새로운 글들을 부르는 함수
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
```

**`refreshControl`**: 목록을 새로 고칠 수 있는 리프레시 컨트롤을 설정합니다. **`refreshing`** 속성은 현재 리프레시 상태를 나타내고, **`onRefresh`** 함수는 리프레시 작업을 수행하는 함수를 나타냅니다. 이 컨트롤은 사용자가 목록을 당겨서 새로 고칠 수 있도록 합니다

---

# useContext
[Context API 참고](https://github.com/jmlee119/react_Study/blob/main/State%20Management/Context%20API.md)   
Redux 등과 비슷하게 여러 컴포넌트 간 상태를 효율적으로 공유할 수 있는 API를 제공한다.

일반적인 React에서 데이터는 위에서 아래로 (상위 컴포넌트에서 하위 컴포넌트로) props를 통해 전달되지만 App 컴포넌트에서 특정 컴포넌트로 상태를 전달하고 싶은데 특정 컴포넌트가 너무 깊이 있을 경우 props를 통해 중간 컴포넌트에 일일이 전달하는 과정이 번거로울 수 있다.

이때 Context를 이용하면 각 컴포넌트에게 데이터를 명시적으로 props로 넘겨주지 않아도 컴포넌트끼리 데이터를 공유할 수 있다.

Context는 Provider와 Consumer로 이루어져 있다.

Provider의 값이 변경되면 Consumer가 이를 감지하고 자동으로 하위 컴포넌트에 변경 사항을 반영해준다.

React v16.3 이상에선 Context를 기본적으로 지원하기 때문에 따로 설치하지 않아도 된다. 

함수 컴포넌트에서는 Context Consumer로서 `useContext`를 사용할 수 있다.

---

# useRef

상태관리를 도와주는 hooks

useState와 비슷하다.

useRef는 객체의 레퍼런스를 반환하는데 해당 객체는 컴포넌트가 Mount되고 UnMount 될 때까지 유지된다.

useState와 비슷하게 초기값을 설정할 수도 있다.

useState = 값이 바뀔때마다 리렌더링이 발생

useRef = 값이 바뀌더라도 리렌더링이 발생하지 않음 

               (자동으로 브라우저 화면에 반영되지 않음)

        ⇒ 객체 참조 특징 때문

하나의 객체 안에서 .current를 통해 데이터 관리

내부값이 변하더라도 참조형 데이터의 특성상 주소값은 변하지 않는다.

⇒ 변경사항을 감지하지 못하기 때문에 리렌더링을 하지 않는다.

useRef는 주로

**1. 자동으로 화면을 렌더링하지 않아도 되는 상태를 관리할 때** 사용한다.

회면 렌더링과 관련이 없는 상태를 useState로 관리하면 render 함수가 불필요하게 실행되기 때문이다.

2. `**useRef`는 DOM 노드의 레퍼런스를 관리할 때**도 사용된다.

만약 어떤 DOM 노드의 ref prop에 `useRef` 반환 값을 넣어주면 React는 해당 값의 `.current`에 해당 DOM 노드의 레퍼런스를 넣어준다. 

그리고 해당 DOM 노드가 변경될 때마다 React가 자동으로 `.current`을 업데이트해준다.

---

# useCallback

특정함수를 새로 만들지 않고 재사용하고 싶을때 사용

주로 렌더링 성능을 최적화해야 하는 상황에서 사용, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 

### useCallback을 이용해 함수를 정의해야 할 때

- React.memo로 감싸진 컴포넌트나 PureComponent에 props로 전달되는 함수
- 다른 hook의 의존성 배열에 포함되는 함수

이외의 경우에는 아래의 표를 기준으로 사용할지 말지 결정한다.

| 사용 여부 |                              X |                           O |
| --- | --- | --- |
| 설명 | 새로운 메모리 할당 및 함수 생성 비용 | 의존성 배열 얕은 비교 비용
가독성 저하 가능성 |

```jsx
const [isDark, setIsDark] = useContext(ThemeContext);

  const changeMode = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);
```

다크모드 작성시 쓰였던 코드

---

# useMemo

함수 컴포넌트 내부에서 동일한 입력일 때 동일한 결과값을 가지는 계산의 불필요한 실행을 방지하기 위해 등장

React는 특정 컴포넌트의 상태가 업데이트되거나 구독 중인 context의 value가 변경되면 해당 컴포넌트와 그의 모든 자식 컴포넌트의 `render` 함수를 실행하는데, 이때 컴포넌트 내부 변수도 다시 계산돼서 정의된다. 

만약 변수 계산 과정이 상당히 오래 걸리는데 계산 결과는 동일하면 매 렌더링 시마다 굳이 다시 계산할 필요가 없을 것이다.

이런 경우에 useMemo를 사용해서 동일한 의존성 배열 값을 가질 때는 계산을 건너뛰고 기존에 계산한 값을 재사용하면 좋다.

useMemo는 기본적으로 바로 이전 값만 Memoization 하기 때문에 여러개의 이전 값을 Memoization할 필요 있으면 직접 구현해야 한다.

> `useMemo`나 `useCallback`를 사용하기 전엔 해당 값-함수가 컴포넌트 바깥에서 정의될 수 있는지 확인해야 한다. 
변수 계산이나 함수 정의는 최대한 컴포넌트 바깥에서 해결하고, 컴포넌트 porps나 state에 의존하는 값-함수일 때만 컴포넌트 내부에서 useMemo나 useCallback를 이용해 정의한다.
> 

### useMemo를 이용해 값을 Memoization해야 할 때

- React.memo로 감싸진 컴포넌트나 PureComponent에 props로 전달되는 객체
- 다른 hook의 의존성 배열에 포함되는 객체
- 동일한 입력일 때 동일한 결과값을 가지는데 오래걸리는 계산

이외의 경우에는 아래의 표를 기준으로 사용할지 말지 결정한다.

input 값을 등록할 때뿐만 아니라 input 내용이 수정 될 때도 우리가 만든 함수가 호출되고 있음,  input 내용이 바뀔 땐 다시 계산 할 필요가 없는데, 이렇게 렌더링 할 때마다 계산을 하는 것은 낭비 ⇒ useMemo 사용

```tsx
const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        field: Yup.string().required("계열 입력해 주세요."),
        major: Yup.string().required("전공 입력해 주세요."),
      }),
    [],
  );
```

---

# useImperativeHandle

상위 컴포넌트가 하위 컴포넌트 ref에 접근할 수 있는 기능을 제공

# useLayoutEffect

`useEffect`의 원리와 사용 방법이 동일하지만 함수가 실행되는 시점이 다르다. 

useEffect: DOM 갱신과 화면 그리기가 모두 완료된 후 실행

useLayoutEffect: DOM을 갱신하고 브라우저가 화면을 그리기 전에 동기적으로 실행

# useDebugValue

사용자 지정(custom) Hook의 디버깅을 도와준다.
