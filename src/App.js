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
import { useState } from "react";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Content />}></Route>
              <Route path="/read" element={<Navigate to="/" />} />
              <Route path="/read/:id" element={<Post />} />
              <Route path="/write" element={<Write />} />
            </Routes>
          </>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Router>
  );
}

export default App;
