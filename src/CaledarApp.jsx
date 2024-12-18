import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const CaledarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default CaledarApp;
