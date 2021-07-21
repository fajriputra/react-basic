import React, { useState, useEffect } from "react";

/* Identity merupakan nilai pasti yang dimiliki oleh setiap identifier, misalkan sebuah fungsi yang kita deklarasikan memiliki identity berbeda-beda.

Kenapa ini penting? karena sebuah fungsi dengan nama yang sama memiliki identity yang berbeda pada tiap render.

Ini akan berbahaya sekali jika kita memasukan fungsi yang identity nya tidak sama setiap render ke dalam dependency useEffect, kenapa? karena hal tersebut akan menyebabkan render loop.

Sama seperti kita mengubah state dari dalam useEffect padahal state tersebut menjadi dependency effect itu sendiri. */

const Komponenku = (props) => {
  let [menu, setMenu] = useState([]);

  // const fetchMenu = () => {
  //   return ["nasi padang", "nasi uduk", "nasi gudeg"];
  // };  <<-- akan mengakibatkan render loop, dikarnakan useEffect memanggil fungsi dari luar dan dijadikan deps sehingga terjadi render loop
  useEffect(() => {
    const fetchMenu = () => {
      return ["nasi padang", "nasi uduk", "nasi gudeg"];
    };
    let data = fetchMenu();
    setMenu(data);
  }, []);

  return (
    <div>
      {menu.map((makanan, index) => (
        <div key={index}>{makanan}</div>
      ))}
    </div>
  );
};
export default Komponenku;
