import React from "react";
import CookieLoad from "./book/part3/reactCookies/CookieLoad";
import CookieRemove from "./book/part3/reactCookies/CookieRemove";
import CookieSave from "./book/part3/reactCookies/CookieSave";

function App() {
  return (
    <div>
      <CookieSave />
      <CookieLoad />
      <CookieRemove />
    </div>
  );
}

export default App;
