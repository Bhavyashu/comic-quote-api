import React, { useState,useEffect } from "react";
import "./styles.css";

function App() {
  const [quotes, setQuote] = useState("");
  const GetQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[0]));
  };
  useEffect(() =>{
    GetQuote();
  },[]);

  return (
    <div className="App">
      <div className="quote">
        <h3>{quotes.quote}</h3>
        <p> -{quotes.character}</p>
        <div className="btnContainer">
          <button className="btn" onClick={GetQuote}> Get Quote </button>
          <a 
          href = {`https://twitter.com/intent/tweeet?text=${quotes.quote}`}
          target = "_blank" 
          rel = "noopener noreferrer"
          className = "btn">
          Tweet</a>
        </div>
       </div>
    </div>
  );
}
export default App;
