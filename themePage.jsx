import React from "react";
import "./themPage.css";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../features/themeSlice";

function ThemePage() {
  const theme = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();

  const light = () => {
    dispatch(lightTheme());
  };

  const dark = () => {
    dispatch(darkTheme());
  };

  return (
    <div className={`themepage ${theme}`}>
      <button onClick={light}>Light</button>
      <button onClick={dark}>Dark</button>

      <h1>Theme Page</h1>
      <p>Lorem Ipsum is simply dummy text...</p>
    </div>
  );
}

export default ThemePage;
