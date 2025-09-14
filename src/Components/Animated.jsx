import React from "react";

const AnimatedGif = ({ src, alt }) => {
  return( <img src={src} alt={alt}
    style={{
        width: '250px',
        height: '250px',
        borderRadius: '50%',            // 🎯 makes it circular
        objectFit: 'cover',             // trims/stretch fill nicely
        filter: 'grayscale(30%) hue-rotate(0deg) brightness(1.2)', // 🎨 color effects
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', // subtle shadow
       // border: '4px solid white',      // optional border
       marginLeft: '20px',
          marginTop: '-650px',
      }}
    />

  
  
  
  );
};

export default AnimatedGif;