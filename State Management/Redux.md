
### Redux : 자바스크립트 상태관리 라이브러리  

redux 3가지 원칙

1. 동일한 데이터는 항상 같은 곳에서 온다 (스토어라는 데이터 공간)  
2. 리액트에서 setState 메소드를 활용해야 상태변경 가능  
3. 변경은 순수함수로만 가능하다  

![리덕스-상태관리-단계](https://github.com/jmlee119/react_Study/assets/68285285/e5fd4089-8a69-43c8-8cd4-7091f5e808c3)


### Store

 상태가 관리되는 공간

- 관리되는 상태 값은 일반적인 방법으로 꺼내오거나 변경하는 것이 불가능
- 정해진 방식을 통해서만 가져오거나 변경할 수 있다.

⇒ Store 내부의 상태 값의 안정성을 유지하기 위함

### Action

- 필수적으로 type이라는 키를 가지고 그 외 필요한 데이터를 payload로 가짐
- payload: 주로 액션에서 전달하는 데이터를 포함하는 속성
- 스토어에 운반할 데이터

### Reducer

- 상태를 변경시키는 함수
- 첫 번째 매개변수: state, 두 번째 매개변수: action
- 전달받은 action에 따라 state 값을 변경시킴
- 액션에서 바로 스토어로 가는게 아닌 리듀서가 업데이트

순서: Action → Dispatch → Reduxer → Store

Action 이 데이터를 dispatch() 메소드에 전달 → dispatch(action) 으로 reducer 호출  → reducer store 생성

: 데이터는 한방향으로 흐르기때문에 

---

### createStore

- Store 객체를 생성하는 메소드
- slice: action + reduce (Redux Toolkit)

```tsx
type userStateType = {
  token: string | null | undefined;
  privKey: string | null | undefined;
  profile: UserData | null | undefined;
};

const defaultUserState: userStateType = {
  token: undefined,
  privKey: undefined,
  profile: undefined,
};

const userSlice = createSlice({
//action type 문자열의 prefix로 들어간다.
  name: "user",
  initialState: defaultUserState,
  reducers: {
	// 리듀서 함수
    setToken: (state, action) => {
      if (action.payload === null)
        return {
          token: null,
          privKey: null,
          profile: state.profile,
        };

      return {
        token: action.payload.token,
        privKey: action.payload.privKey,
        profile: state.profile,
      };
    },

    setProfile: (state, action) => {
      return {
        token: state.token,
        privKey: state.privKey,
        profile: action.payload,
      };
    },
    clear: state => {
      state.token = null;
      state.privKey = null;
      state.profile = null;

      return state;
    },
  },
});
```

- react-redux 라이브러리에서 Provider 컴포넌트를 가져와 Store를 통해 상태를 관리해줄 컴포넌트를 감싸면 된다.

```tsx
<Provider store={reduxStore}>
	<NavigationContainer theme={isDarkModeContext[0] ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider value={isDarkModeContext}>
          <App />
      </ThemeContext.Provider>
  </NavigationContainer>
</Provider>
```

### Dispatch

- reducer로 action 객체를 전달하는 역할
- useDispatch: action 객체를 전달

```jsx
static async setUserToken(token: string, privKey: string): Promise<void> {
    await Storage.write(storageKey.USER_TOKEN, token);
    await Storage.write(storageKey.USER_PRIVKEY, privKey);

    reduxStore.dispatch(userSlice.actions.setToken({ token: token, privKey: privKey }));
  }
```

### Redux hook

react-reduce 라이브러리는 action 객체를 reducer에 전달하고 변경된 state의 변경사항을 다른 컴포넌트에게 알려주는 역할을 하는 hooks를 지원함

useSelector: 변경된 state를 가져올 수 있음

```jsx
import { useSelector } from "react-redux";
```

### Reducer가 여러 개인 경우

- combineReducers를 사용할 수 있다.
- 우선 reducer로 전달할 action 객체를 리턴하는 함수들을 정의하고 export 한다.

```tsx
type userStateType = {
  token: string | null | undefined;
  privKey: string | null | undefined;
  profile: UserData | null | undefined;
};

const defaultUserState: userStateType = {
  token: undefined,
  privKey: undefined,
  profile: undefined,
};

const ChatSlice = createSlice({
  name: "roomname",
  // @ts-ignore
  initialState: {},
  reducers: {
    addChat: (state, action) => {
      const { chatid, content }: { chatid: number; content: string } = action.payload;

      const Chatroom = state[chatid];
      if (Chatroom == undefined) {
        state[chatid] = [];
      }
      state[chatid].push(content);
      return state;
    },
  },
});
const userSlice = createSlice({
   생략
});

const userCategorySlice = createSlice({
  name: "userCategory",
  initialState: null as UserCategory | null,
  reducers: {
    setUserCategory: (state, action) => {
      return action.payload as UserCategory;
    },
  },
});
const LoadingUISlice = createSlice({
  name: "LoadingUI",
  initialState: 0,
  reducers: {
    showLoading: state => (state += 1),
    hideLoading: state => (state -= 1),
  },
});
export { ChatSlice, LoadingUISlice, userCategorySlice, userSlice };
```

- combineReducer를 이용하여 reducer를 결합할 수 있다.
- 전달된 action의 type값이 무엇이냐에 따라 해당하는 reducer함수로 전달되어 state 값을 변경 시킨다.

```tsx
const rootReducer = combineReducers({
  user: userSlice.reducer,
  LoadingUI: LoadingUISlice.reducer,
  userCategory: userCategorySlice.reducer,
  ChatSlice: ChatSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
});
export { ChatSlice, LoadingUISlice, userCategorySlice, userSlice };
```
