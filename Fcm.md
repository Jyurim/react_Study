### **Firebase cloud messaging 설정**

FCM은 안드로이드 용 (IOS는 다른 방식으로 구성)

[Firebase Console](https://console.firebase.google.com/) 접속 후 프로젝트를 만들고 나의 클라이언트와 연결시켜 주어야 한다.

google-services.json파일을 다운로드 후 프로젝트의 Root폴더에 넣고 app.json파일에 아래의 코드처럼 추가

```json
"expo": {
    "android": {
			...
      "package": "com.tovelop.maphant",
      "googleServicesFile": "./google-services.json"
    },
```

생성한 firebase프로젝트에서 클라우드 메시지 키를 복사

---

## **Get the token**

1. 푸시 알림을 하기 위한 유저의 Permission
2. 유저의 ExpoPush Token
    
    (엑스포 토큰은 주소, 
    
    만약 푸시 알림이 메일이면 엑스포 토큰은 유저의 이메일 주소)
    

Expo push token으로 생성된 토큰의 경우 디바이스의 앱 당 하나씩 생성된다. 만약 앱을 삭제하게 된다면 토큰 역시 같이 없어진다.

⇒ redux persistens를 이용하여 생성된 토큰을 저장하고 관리하면 편하다.

**ExpoPush Token = getDevicePushTokenAsync()**

```tsx
// 로그인 할때 코드
UserStorage.setUserToken(res["pubKey"], res["privKey"]).then(() => {
          return UserAPI.getProfile().then(res => {
            UserStorage.setUserProfile(res.data);
            Notifications.getDevicePushTokenAsync().then(res => sendFcm(res.data));
          });
        });
```

getDevicePushTokenAsync(): 다른 푸시 알림 서비스와 함께 사용할 수 있는FCM, APNs 또는 `[PushSubscription` data](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription) ****반환

APN(Access Point Name)

: 휴대정보단말기 등을 휴대전화 네트워크에 연결하여 데이터 통신을 할 때 필요한 대상을 지정하는 문자열

모바일 네트워크를 이용하는 단말기의 데이터 통신(인터넷 웹 서핑, MMS 등)에 필요한 인증 정보 입력과 사용 목적을 지정하는 설정

⇒ PC로부터 인터넷에 연결할 수 있는 공급자 설정에 해당하는 것으로 다양한 네트워크 서비스와 인터넷 연결을 제공하는 계약한 사업자의 이름을 설정한다.

---

### API

fcm 을 이용하여 토큰을 발급하는 api,

알림온 데이터들을 불러오는 api

```jsx
import { fcmList } from "../../types/Fcm";
import { dataResponse, GetAPI, PostAPI } from "../fetchAPI";

const sendFcm = (token: string) => {
  return PostAPI(`/fcm/token`, {
    token,
// 위 코드에서 발급된 토큰을 이용함
  });
};
const notificationsList = (
  page: number,
  recordSize: number,
): Promise<dataResponse<{ list: fcmList[] }>> => {
  return GetAPI(`/notifications/?page=${page}&recordSize=${recordSize}0&pageSize=100`);
};

export { notificationsList, sendFcm };
```

fcm Type

```jsx
type fcmList = {
  id: number; // fcm_id
  etc: Map<string, string>; // 알림유형 , 내용
  title: string; // 알림 제목
  body: string;  // 알림 내용
  createdAt: string; // 알림 받은 시간
  readAt?: string; // 확인 여부
};

export type { fcmList };
```

---

Google- services 를 이용하여 firebase 연동

firebase에 fcm 내용 저장

```jsx
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
 
-- App.tsx
```

`shouldShowAlert` : 알림이 화면에 알림 창으로 표시되어야 하는지 여부

`shouldPlaySound` : 알림음을 재생해야 하는지 여부

`shouldSetBadge` : 앱 아이콘 뱃지에 숫자를 표시해야하는지 

---

### Android Channel

android  채널을 구현하지 않는다면 알림이 되지않음 

옛날에는 알림을 받거나 안받거나 였지만, 요즘 android 에서는 채널을 만들어 사용자가 원하는 알림만을 수신할수 있도록 되어있음 

- **Notification ID와 Channel ID를 동일하게 하는 경우**

여러 번 알림을 호출해도 상단바에 동일한 알림으로 받는다.

여러 번 알림을 호출해도 하나의 채널만이 생성된다.

- **Notification ID는 개별 ID와 Channel ID를 동일하게 하는 경우**

여러 번 알림을 호출하면 해당 개수만큼의 알림이 상단바에 나타난다.

여러 번 알림을 호출해도 하나의 채널만이 생성된다.

- **Notification ID는 동일하게, Channel ID는 개별 로 하는 경우**

여러 번 알림을 호출해도 상단바에 동일한 알림으로 받는다.

여러 번 알림을 호출하면 해당 개수만큼의 알림 채널이 생성된다.

- **Notification ID는 개별 ID와, Channel ID는 개별 로 하는 경우**

여러 번 알림을 호출하면 해당 개수만큼의 알림이 상단바에 나타난다.

여러 번 알림을 호출하면 해당 개수만큼의 알림 채널이 생성된다.

---

알림을 관리하는 코드

```jsx
async function registerForPushNotificationsAsync() {
  await Notifications.setNotificationChannelAsync("default", {
//알림 채널을 설정하는 코드
    name: "default", // 채널 이름
    importance: Notifications.AndroidImportance.MAX, // 중요도
    vibrationPattern: [0, 250, 250, 250], 
	// 알림 진동 패턴 0ms 대기 후 250ms 진동 , 250ms 대기 후 250ms 진동
    lightColor: "#FF231F7C",
  });

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
// 권한 상태 저장
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
}
```

토큰을 얻으려면 `getDevicePushTokenAsync` 또는  `getExpoPushTokenAsyn` 보다 먼저 `setNotificationChannelAsync`를 호출해야 한다.

getPermissionsAsync() : 현재 permission 상태를 반환

granted(사용자가 허용을 한 상태 )가 아니면 permission요청

**setNotificationChannelAsync(channel_ID, channel)**

| Name | Type | Description |
| --- | --- | --- |
| channelId | string | The channel identifier. |
| channel | https://docs.expo.dev/versions/latest/sdk/notifications/#notificationchannelinput | Object representing the channel's configuration. |
| setNotificationChannelAsync
(optional) | (channelId: string, channelConfiguration: NotificationChannelInput) => Promise<null | NotificationChannel> |  |

(필요한 경우) 지정된 channel에  channelConfiguration 할당 

⇒ 특정 알림 channel group에 할당할 수 있다.

---

## Handle the notification

```tsx
const isUserDataLoading = useSelector(UserStorage.isUserDataLoadingSelector);
const notificationListener = useRef<Notifications.Subscription>();
const responseListener = useRef<Notifications.Subscription>();
//useRef : 저장공간 혹은 Dom요소에 접근하기 위해 사용

useEffect(() => {
    UserStorage.loadUserDataOnStartUp();

    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      alert(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
	 // 알림 리스너의 구독을 해지함 -> 불필요한 메모리 소비를 줄임
      // @ts-ignore
      Notifications.removeNotificationSubscription(notificationListener.current);
      // @ts-ignore
      Notifications.removeNotificationSubscription(responseListener.current);
    };
}, [isUserDataLoading]);
```

### addNotificationReceivedListener

앱이 포그라운드에서 실행되는 동안 알림이 수신 될 때마다 시작된다.

예를 들어 주문 했던 상품이 주문 완료가 되었다. 그러면 사용자에게 주문 중이었던 화면이 주문 완료 되었다고 변경될 필요가 있다. 그럴 때 사용하는 것이 addNotificationReceivedListener 이다.

```tsx
notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      alert(notification);
});
```

### addNotificationResponseReceivedListener

사용자가 알림을 탭하거나 알림과 상호작용 할 때마다 시작된다.

앱이 포그라운드, 백그라운드 또는 종료될 때 작동

사용자가 특정 알림을 탭 한 후 특정 화면으로 라우팅하는 데 특히 유용하다.

```tsx
responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response);
});
```

### removeNotificationSubscription

Removes a notification subscription returned by an `addNotificationListener` call.

| Name | Type | Description |
| --- | --- | --- |
| subscription | https://docs.expo.dev/versions/latest/sdk/notifications/#subscription | A subscription returned by addNotificationListener method. |

```tsx
// @ts-ignore
Notifications.removeNotificationSubscription(notificationListener.current);
// @ts-ignore
Notifications.removeNotificationSubscription(responseListener.current);
```
