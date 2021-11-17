import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pomodoro } from "./pages/Pomodoro";
import { Error404 } from "./pages/Error404";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
