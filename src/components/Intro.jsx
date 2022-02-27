import React, { useCallback } from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const handleTypewriter = useCallback(typewriter => {
    typewriter.typeString(`<div class="typewriter-container"><h1 class="intro-h1">Hello! </h1></div>`).start();
    typewriter
      .typeString(`<div class="typewriter-container"><h2 class="intro-h2">Welcome to my portfolio</h2></div>`)
      .start();
  }, []);

  return (
    <>
      <div>
        <Typewriter onInit={handleTypewriter} />
      </div>
    </>
  );
}
