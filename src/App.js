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
import { useEffect, useState } from "react";
import Login from "./Components/Login";

function App() {
  const [displayName, setDisplayName] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("sqeak_displayName") != null)
      setDisplayName(localStorage.getItem("sqeak_displayName"));
  }, []);
  return (
    <Router>
      <div className="app">
        {displayName ? (
          <>
            <Navbar setDisplayName={setDisplayName} />
            <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="/read" element={<Navigate to="/" />} />
              <Route path="/read/:id" element={<Post />} />
              <Route path="/write" element={<Write />} />
            </Routes>
          </>
        ) : (
          <Login setDisplayName={setDisplayName} />
        )}
      </div>
    </Router>
  );
}

export default App;
