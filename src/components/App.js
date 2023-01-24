import { useEffect } from "react";
import { getPosts } from "../api";

function App() {
  // calling the fetch function using useEffect
  useEffect(async ()=>{
    const fetchPosts = async()=>{
      const response = await getPosts();
      console.log('response',response);
    }
    
    fetchPosts();
  },[]);
  return (
      <div className="App">
        <h1>Hello World</h1>

      </div>
  );
}

export default App;
