import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./Components/list";
import Exchange from "./Components/exchange";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/exchange/:id" element={<Exchange />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
