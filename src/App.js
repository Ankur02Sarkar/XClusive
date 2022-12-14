import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /> <Home /> </>} />
          <Route path="/checkout" element={<> <Header /> <Checkout /> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
