import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

// 해시 라우터
// 브라우저 히스토리 API를 사용할 수 없는 환경에서 사용
// htttp://localhost:3000/#/about

// 브라우저 라우터 (HTML5 히스토리 API)
// 브라우저 히스토리 API를 사용할 수 있는 환경에서 사용
// htttp://localhost:3000/about

// 라우터 6.4 - 새로운 문법 도입
// 라우터 6.4 이전 버전과는 문법이 다름

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
