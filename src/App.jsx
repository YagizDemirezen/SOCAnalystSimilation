import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LevelSelect from "./pages/LevelSelect";
import Phishing from "./scenarios/Phishing";

function App() {
  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate(`/scenarios/${level.page}`);
  };

  return (
    <Routes>
      <Route path="/" element={<LevelSelect onStart={handleStart} />} />
      <Route path="/scenarios/:page" element={<Phishing />} />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}