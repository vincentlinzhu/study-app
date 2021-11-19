import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pomodoro } from "./pages/Pomodoro";
import { Custom } from "./pages/Custom";
import { Error404 } from "./pages/Error404";

function App() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route
          path="/custom"
          element={<Custom path={location.pathname} />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
