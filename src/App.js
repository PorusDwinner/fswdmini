import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./pages/Topbar";
import Login from './components/Login';
import Home from './pages/Home';
import Post from "./components/Post";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/login-register' element={ <Login /> } />
        <Route exact path='/post' element={ <Post /> } />
        <Route exact path='/search' element={ <Search /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
