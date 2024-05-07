import "../styles/globals.css"; // Ensure you have a styles directory with a globals.css file
import {wrapper} from "../redux/store";

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
