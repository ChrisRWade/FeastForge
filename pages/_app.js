import React, {useEffect, useState} from "react";

import "../styles/globals.css";
import {wrapper} from "../redux/store";
import {UserProvider} from "../context/UserContext";

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  );
}

export default wrapper.withRedux(MyApp);
