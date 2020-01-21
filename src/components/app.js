import React, { useState, useEffect } from "react";
import axios from "axios";

import Meme from "./meme";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("https://bac-meme-api.herokuapp.com/memes")
        .then((response) => response.json())
        .then((data) => setMemes(data))
        .catch((error) => console.log("Fetch Data Error", error));
    };
    fetchData();
  }, []);

  const deleteMeme = (id) => {
    axios
      .delete(`https://bac-meme-api.herokuapp.com/meme/${id}`)
      .then(setMemes(memes.filter((meme) => meme.id !== id)))
      .catch((error) => console.log("delete meme error", error));
  };

  const renderMemes = () => {
    return memes.map((meme) => {
      return <Meme key={meme.id} meme={meme} deleteMeme={deleteMeme} />;
    });
  };

  return <div className="app">{renderMemes()}</div>;
}

export default App;
