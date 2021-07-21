/* _hook useMemo berfungsi mirip seperti useCallback, bentuk fungsinya pun hampir sama, yaitu: useMemo(() => fn, [deps])

Perbedaannya adalah, useMemo akan menggunakan deps untuk menentukan apakah fn akan dipanggil atau tidak, mirip seperti effect?

Tidak juga, useMemo fn tidak akan dipanggil setelah render seperti halnya useEffect, akan tetapi menunggu fungsi tersebut dipanggil seperti useCallback.

Jika deps yang diberikan pada useMemo tidak berubah, maka useMemo akan otomatis mengembalikan nilai yang sama seperti pemanggilan fn sebelumnya, tanpa memanggil fn lagi */

import React, { useMemo, useState, useEffect } from "react";

const UseMemo = () => {
  //   const pets = () => {
  //     return ["kucing", "kelinci", "anjing", "monyet"];
  //   };

  //   let pet = useMemo(() => {
  //     if (cute === "kucing") return "hemm gemoyyyyy";

  //     return pets();
  //   }, [cute]);

  //   return (
  //     <div>
  //       {pet.map((gemoy, index) => (
  //         <div key={index}>{gemoy}</div>
  //       ))}
  //     </div>
  //   );

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowRespon(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Time
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

const slowRespon = (num) => {
  console.log("CALLING SLOW RESPON");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default UseMemo;
