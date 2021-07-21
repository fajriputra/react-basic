import React, { useState, useEffect } from "react";

let TimeElapsed = (props) => {
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds((detik) => detik + 1); // menggunakan fungsi updater untuk menghindari update seterusnya tanpa deps
    }, 1000); // <--- effect kita akan berjalan sekali, dan selanjutnya state seconds akan diupdate oleh interval setiap detik, tanpa menyebabkan pemanggilan setInterval setiap detiknya.

    return () => clearInterval(intervalId);
  }, []);

  return <div>{seconds} detik.</div>;
};

export default TimeElapsed;
