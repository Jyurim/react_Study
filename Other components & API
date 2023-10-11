```tsx
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
```

안드로이드에서 앱 실행시 권한 요청을 한다. 

### 사용법

### `check()`

```tsx
static check(permission: Permission): Promise<boolean>;
```

지정된 권한이 부여되었는지 여부에 대해 불리언 값으로 해결되는 약속을 반환합니다

### `request()`

```tsx
static request(
  permission: Permission,
  rationale?: Rationale,
): Promise<PermissionStatus>;
```

사용자에게 권한을 활성화하라는 메시지를 표시하고 사용자가 요청을 허용하거나 거부했는지 또는 다시 요청하고 싶지 않은지를 나타내는 문자열 값으로 반환합니다.

---

```jsx
PermissionsAndroid.PERMISSONS
```

## Permissions

(PERMISSIONS대신 넣을 수 있는 값들)

| Andriod 키 값 | 설명 |
| --- | --- |
| CAMERA | 카메라 사용 권한 |
| RECORD_AUDIO | 마이크 사용 권한 |
| READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE | 사진첩 사용 권한 |
| READ_CONTACTS | 연락처 사용 권한 |
| READ_CALENDAR, WRITE_CALENDAR | 캘린더 이벤트 사용 권한 |
| ACCESS_BACKGROUND_LOCATION | 백그라운드 리프레시 사용 권한 |
| VIBRATE | 푸시 알림 사용 권한 |
| BLUETOOTH, BLUETOOTH_ADMIN | 블루투스 사용 권한 |
| ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION | 위치 정보 사용 권한 |
| BODY_SENSORS | 모션 사용 권한 |
| None | 앱 추적 투명성 사용 권한 |
| BLUETOOTH, BLUETOOTH_ADMIN | 블루투스 Peripheral 사용 권한 |
| READ_CALENDAR, WRITE_CALENDAR | 캘린더 사용 권한 |
| READ_CONTACTS | 연락처 사용 권한 |
| None | Face ID 사용 권한 |
| ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION | 정확한 위치 정보 사용 권한 |
| ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION | 항상 위치 정보 사용 권한 |
| ACCESS_COARSE_LOCATION, ACCESS_FINE_LOCATION | 사용 중일 때 위치 정보 사용 권한 |
| READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE | 미디어 라이브러리 사용 권한 |
| RECORD_AUDIO | 마이크 사용 권한 |
| BODY_SENSORS | 모션 사용 권한 |
| VIBRATE | 알림 사용 권한 |
| READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE | 사진첩 사용 권한 |
| READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE | 사진첩 추가만 사용 권한 |
| READ_REMINDERS, WRITE_REMINDERS | 리마인더 사용 권한 |
| None | Siri 사용 권한 |
| RECORD_AUDIO | 음성 인식 사용 권한 |

```jsx
PermissionAndroid.RESULTS.GRANT
```

## Grant

| 반환 값 | 설명 |
| --- | --- |
| RESULTS.DENIED | 권한이 요청되지 않았거나 요청 가능하지만 거부되었습니다 라는 상태 |
| RESULTS.GRANTED | 권한이 허용되었습니다 라는 상태 |
| RESULTS.NEVER_ASK_AGAIN |  |
