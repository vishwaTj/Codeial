import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getPosts } from '../api';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';




// These are a few dummy cmponents whicha are rendered upon destroying the main page and change of route
// dummy component About
const About = () => {
  return <h1>About</h1>;
};

//Dummy component UserInfo
const UserInfo = () => {
  return <h1>User</h1>;
};

//Dummy component Page404
const Page404 = () => {
  return <h1>404</h1>;
};


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
   // Here Router s used to render different pages( different elements ) upon every change in Route 
    <div className="App">
      <Router>
       {/* <Navbar />  */}
       <Routes> 
         <Route path="/" element={<Home/>}/>

         <Route path="/login" element={<Login />}/>

         <Route path="/about" element={<About />}/>

         <Route path="/user/asdasd" element={<UserInfo />}/>
         <Route element={<Page404/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

