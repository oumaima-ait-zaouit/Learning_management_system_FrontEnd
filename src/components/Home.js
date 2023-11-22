import HomePageHeader from "./HomePageHeader";
import Category from "./Category";
import Professor from "./Professor";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Home() {
  useEffect(()=>{
    document.title='DS Learn'
});
  return (
    <div className="App">

      <HomePageHeader />    
      <Category />
      <Courses />
      <Professor />
          
    </div>
      
  );
}

export default Home;