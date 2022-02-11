import React, { useCallback } from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
  const handleTypewriter = useCallback((typewriter) => {
    typewriter.typeString(`<h1 class="intro">Hello.</h1>`).start();
    typewriter.typeString(`<h2>Welcome</h2>`).start();
  }, []);

  return (
    <>
      <div>
        <Typewriter onInit={handleTypewriter} />
      </div>
    </>
  );
}
