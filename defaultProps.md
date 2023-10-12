defaultProps : props 를 따로 지정해주지 않아도 기본값으로 전달 해주는 props

```jsx
type DefaultProps = {
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
} & EmptyProps;

type ButtonProps = {
  widthFull?: boolean; // width를 직접 설정하고 싶으면 style을 사용할 것
  onPress: () => void;
} & DefaultProps;
```

빈 props 가 전달이 되었을 때 항상 기본값을 가지고 싶다면 defaultProps를 쓴다
