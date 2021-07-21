import React, { useEffect, useState } from "react";

const Editing = () => {
  const [text, setText] = useState("text"); //<--- state

  const [seconds, setSeconds] = useState(0);
  // EFFECT 1 : dipanggil hanya jika nilai text berubah
  useEffect(() => {
    console.log("sinkronisasi ke local storage");
    if (text.length) localStorage.setItem("edit-text", text);
  }, [text]);
  // EFFECT 2 : dipanggil hanya sekali sesaat setelah render pertama
  useEffect(() => {
    setText(localStorage.getItem("edit-text"));

    const intervalId = setInterval(() => {
      setSeconds((second) => second + 1);
    }, 1000);

    //------ CLEAN UP FUNCTION ---------//
    // fungsi ini hanya akan dipanggil setelah komponen unmounted
    return function () {
      clearInterval(intervalId); // <--- panggil clearInterval di sini
    };
    // ---------------------------------//
  }, []);

  return (
    <>
      Waktu: {Math.floor(seconds / 60)} menit {seconds % 60} detik
      <textarea
        value={text} // <--- value mengambil nilai text
        onChange={(e) => setText(e.target.value)} // <--- update state text ketika nilai textarea berubah;
      />
    </>
  );
};

export default Editing;
