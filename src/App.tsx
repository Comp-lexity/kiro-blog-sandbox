import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CreatePost from "./pages/CreatePost.tsx";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">
          Micro Blog
        </Link>
        <nav>
          <Link to="/create" className="nav-link">
            New Post
          </Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
