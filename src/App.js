import Home from "./pages/home/Home";
import Calculator from "./pages/calculator/Calculator";
import Simulator from "./pages/simulator/Simulator";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import "./themes/variables.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState();
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home data={data} />} />
            <Route
              path="calculator"
              element={<Calculator setData={setData} />}
            />
            <Route path="simulator" element={<Simulator />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
