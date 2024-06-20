import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Blogs from './Pages/Login/SignUp/Blogs/Blogs';
import BlogDetails from './Pages/Login/SignUp/Blogs/BlogDetails/BlogDetails';
import './style.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className='my-2'></div>
     <Routes>
      <Route path="/login" Component={Login}/>
      <Route path="/signup" Component={SignUp}/>
      <Route path="/:category" Component={Blogs}/>
      <Route path="/Blog/:id" Component={BlogDetails}/>
     </Routes>
    </main>
  );
}

export default App;
