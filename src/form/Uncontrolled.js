import React, { useRef } from "react";

// Uncontrolled component merupakan element input yang statenya tidak di kontrol reactJS, dan form tersebut dibaca menggunakan useRef()

const Uncontrolled = () => {
  const input = useRef(null);
  const inputFile = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // untuk mendapatkan nilai saat ini
    alert(input.current.value);
    // file api untuk dapat nama file
    alert(inputFile.current.files[0].name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input type="text" name="name" ref={input} defaultValue="placeholder" />
      </label>
      <label>
        Photo: <input type="file" ref={inputFile} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Uncontrolled;
