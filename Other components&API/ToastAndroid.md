Android modul 을 js 모듈로 사용

### 메시지의 텍스트가 있는 문자열

```jsx
static show(message: string, duration: number);
```

duration(Toast할 기간): ToastAndriod.SHORT, ToastAndriod.LONG

### 레이아웃에서 토스트가 표시되는 위치 지정

```jsx
static showWithGravity(message: string, duration: number, gravity: number);
```

duration: ToastAndriod.SHORT, ToastAndriod.LONG 

gravity: ToastAndriod.TOP, ToastAndriod.BOTTOM, ToastAndriod.CENTER 

### offset을 픽셀 단위로 지정

```jsx
static showWithGravityAndOffset(
	message: string,
	duration: number,
	gravity: number,
	xOffset: number,
	yOffset: number,
);
```

---

### 화면에 나타내는 시간(Duration)

```jsx
static SHORT: number;
```

```jsx
static LONG: number;
```

---

### 화면 상 위치(Gravity)

```jsx
static TOP: number;
```

```jsx
static BOTTOM: number;
```

```jsx
static CENTER: number;
```

---

실제로 사용되었던 부분

```jsx
import Toast from "react-native-root-toast";

if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      Toast.show("이메일 형식을 확인해주세요", { duration: Toast.durations.SHORT });
      return;
    } else if (password.length < 4) {
      Toast.show("비밀번호는 4자리 이상 입니다", { duration: Toast.durations.SHORT });
      return;
    }
```

로그인 되지 않을 경우 toast 로 알림을 출력
