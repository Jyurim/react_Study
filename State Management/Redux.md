
### Redux : 자바스크립트 상태관리 라이브러리  

1. 동일한 데이터는 항상 같은 곳에서 온다 (스토어라는 데이터 공간)  
2. 리액트에서 setState 메소드를 활용해야 상태변경 가능  
3. 변경은 순수함수로만 가능하다  

![리덕스-상태관리-단계](https://github.com/jmlee119/react_Study/assets/68285285/e5fd4089-8a69-43c8-8cd4-7091f5e808c3)

스토어 (store) : 상태가 관리되는 공간  

액션 (Action) : 스토어에 운반할 데이터  

리듀서 (Reducer) : 액션에서 바로 스토어로 가는게 아닌 리듀서가 업데이트  

Action 이 데이터를 dispatch() 메소드에 전달 → dispatch(action) 으로 reducer 호출  → reducer store 생성  

: 데이터는 한방향으로 흐르기때문에
