import "./App.css";
import Home from "./components/Home";
import Review from "./components/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="/review" element={<Review></Review>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}
export default App;