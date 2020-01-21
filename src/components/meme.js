import React from "react";

function Meme(props) {
  const { id, text, favorite, image } = props.meme;
  return (
    <div className="meme">
      <div className="img-wrapper">
        <img className="meme-img" src={image} alt="funny meme" />
      </div>

      <p>{text}</p>

      {favorite ? (
        <img
          className="favorite-img"
          src="https://cdn.imgbin.com/16/9/1/imgbin-soviet-union-hammer-and-sickle-communism-red-star-lottery-7j61yZBG7dKNbqeuVY2RiPjmQ.jpg"
          alt="favorite star"
        />
      ) : null}
      <button onClick={() => props.deleteMeme(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default Meme;
