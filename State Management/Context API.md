### Context

- React 컴포넌트 간에 어떠한 값을 공유할 수 있게 해주는 기능
- 전역적(global)으로 필요한 값을 다룰 때 사용(꼭 전역적일 필요 없음)
- React 컴포넌트에서 Props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법

### context를 사용하는 이유?

- context 는 주로 전역변수를 다룰 때 사용
- React Application에서는 일반적으로 컴포넌트에게 데이터를 전달해주어야 할 때 Props를 통해 전달
- 하지만 깊숙히 위치한 컴포넌트에 데이터를 전달해야 하는 경우에는 여러 컴포넌트를 거쳐 연달아서 Props를 설정해주어야 하기 때문에 불편하고 실수할 가능성이 높아짐

### context 사용법

```tsx
import { createContext, Dispatch, SetStateAction } from "react";
export type ThemeContextType = [boolean, Dispatch<SetStateAction<boolean>>];
export const ThemeContext = createContext<ThemeContextType>([false, () => {}]);
```

```tsx
export type ThemeContextType = [boolean, Dispatch<SetStateAction<boolean>>];
```

Context 객체 안에는 Provider라는 컴포넌트가 들어있다.

그리고, 그 컴포넌트 간에 공유하고자 하는 값을 value 라는 Props로 설정하면 자식 컴포넌트들에서 해당 값에 바로 접근을 할 수 있다.

ThemeContextType 은 테마 상태를 나타내는 `boolean` 값과 이를 업데이트하는 데 사용되는 `dispatch` 함수를 포함하는 타입

```tsx
Dispatch<SetStateAction<boolean>>
```

boolean 값을 받아서 상태를 업데이트하는 함수 를 나타내는 타입

`useState` 와 `SetStateAction` 다른점 

⇒ `useState`는 React에서 상태를 다루는 함수이고, `SetstateAction`은 TypeScript에서 타입을 정의할 때 사용되는 타입
![IMG_50721E208EBA-1](https://github.com/jmlee119/react_Study/assets/68285285/dab24593-95b5-4590-b6bc-9287cf6b9c15)


`useContext` 라는 Hook을 사용하여 Context에 넣은 값에 바로 접근할 수 있다

### Provider를 사용하지 않을 경우

- value 값을 따로 지정하지 않았기 때문에 undefined로 조회되어 해당 값이 보여질 자리에 아무것도 나타나지 않게 된다.
- 그러한 경우 기본값을 설정하고 싶다면, createContext 함수에 인자로 기본 값을 넣어주면 된다.
- 기본 값을 보여주지 않고 아예 오류를 띄워서 개발자가 고치도록 명시 하고 싶다면 아까 우리가 만든 커스텀 Hook을 다음과 같이 수정하면 된다.

```tsx
function useMyContext() {
  const value = useContext(ThemeContext);
  if (value === undefined) {
    throw new Error('useMyContext should be used within ThemeContext.Provider');
  }
}
```

### Context에서 상태 관리가 필요한 경우

- Provider를 새로 만들어 주는 것이 좋다.

```tsx
import { createContext } from 'react';

const CounterContext = createContext();

function CounterProvider({ children }) {
  return <CounterContext.Provider>{children}</CounterContext.Provider>;
}

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

// (...)
```

위와 같이 children Props를 받아와서 CounterContext.Provider 태그 사이에 넣어주면 된다. 그 다음 필요한 기능들을 CounterProvider 컴포넌트 안에서 구현해주면된다.

- 하나의 상태만 있는 경우
    - useState를 사용하여 만들어진 값과 함수가 들어있는 배열을 통째로 value로 넣는다.

```tsx
import { createContext, useState } from 'react';

const CounterContext = createContext();

function CounterProvider({ children }) {
  const counterState = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
}

// (...)
```
