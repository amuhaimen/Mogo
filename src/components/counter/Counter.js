import axios from "axios";
import React, { useEffect } from "react";
import "./counter.css";

function Counter() {
  useEffect(() => {
    async function info() {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log("data", data);
    }
    info();
  }, []);
  // useEffect {()=>(
  //   function info (){
  //     let data = axios.get({"https://jsonplaceholder.typicode.com/comments"})
  //     console.log(data)
  //   }

  // ),[]}
  return (
    <section className="achivement">
      <div className="achievementcontainer container">
        <div className="achieveamount">
          <h1>42</h1>
          <h4>WEB DESIGN PROJECTS</h4>
        </div>
        <div className="achieveamount">
          <h1>123</h1>
          <h4>HAPPY CLIENT</h4>
        </div>
        <div className="achieveamount">
          <h1>15</h1>
          <h4>AWARD WINNER</h4>
        </div>
        <div className="achieveamount">
          <h1>99</h1>
          <h4>CJP OF COFFEE</h4>
        </div>
        <div className="achieveamount">
          <h1>24</h1>
          <h4>MEMBERS</h4>
        </div>
      </div>
    </section>
  );
}

export default Counter;
