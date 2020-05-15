import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center mt-5 pt-3">
      <h1 style={{fontSize:"190px"}}>404</h1>
      <h2>Page Not Found</h2>
      <h5 className="mt-5 pt-2">wanna go Home? <Link to='/'>Click here</Link></h5>
    </div>
  );
};

export default Page404;
