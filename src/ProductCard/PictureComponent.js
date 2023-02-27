import React from "react";

function PictureComponent(props) {
  return (
    <div>
      {props.images.map((image) => (
        <img className="cardImg" src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default PictureComponent;
