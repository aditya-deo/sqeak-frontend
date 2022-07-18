import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Post from "./Components/Post";
import Write from "./Components/Write";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/read" element={<Navigate to="/" />} />
          <Route path="/read/:id" element={<Post />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
