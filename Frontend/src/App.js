import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/auth/Login";
import { AppRouters } from "./Routes/Routers";
import CustomSnackbar from "./components/common/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CircularIndeterminate from "./components/common/Loader";
import { setLoader } from "./Store/Slice/commonSlice";
import { useTranslation } from "react-i18next";
import Language from "./components/common/Language";
function App() {
  const isLoading = useSelector((state) => state.loader.status);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    dispatch(setLoader(true));
  }, []);

  function LoaderTest() {
    dispatch(setLoader(false));
  }
  setTimeout(LoaderTest, 2000);

  return (
    <>
      <div className="App">
        <AppRouters />
        {isLoading && <CircularIndeterminate />}
        <CustomSnackbar />
      </div>
    </>
  );
}

export default App;
