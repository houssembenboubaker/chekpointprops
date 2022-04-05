import React from "react";
import NAvigation from "./Profile/NAvigation";
import Profile from "./Profile/Profile";

function App() {
  function handelName() {
    alert('houssem')
    
  }
  let src ="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4692e9108512257.5fbf40ee3888a.jpg"
  return <div>
    <NAvigation/>
    <Profile Fullname='houssem' bio='true' profession='ingenieur' handelName={handelName}>{src}</Profile>
    
  </div>;
}

export default App;
