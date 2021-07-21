/* 
useCallback memiliki signature yang sama seperti useEffect, yaitu menerima 2 argument, argument pertama adalah sebuah fungsi untuk dipanggil, dan argumen kedua adalah dependency array, seperti ini: useCallback((fn) => , [deps])

Bedanya adalah useCallback bukan untuk dipanggil setelah selesai render seperti halnya useEffect. dependency yang dimasukan pun bukan untuk melakukan trigger supaya fungsi pada argumen pertama dipanggil.

useCallback berguna untuk mempertahankan nilai identity yang sama setiap render. Selama nilai item di dalam dependency array tidak berubah, selama itu pula identity dari callback akan selalu sama antar render.

Hal ini berbeda dengan fungsi biasa yang tidak dibungkus di dalam useCallback yang akan selalu memiliki nilai identity berbeda antar render.

Dengan demikian, nilai identity callback hanya akan berubah ketika salah satu item pada dependency array nya ada yang berubah.
*/

import React, { useState, useEffect, useCallback } from "react";

const Komponenku = (props) => {
  let [menu, setMenu] = useState([]);

  const fetchMenu = useCallback(() => {
    return ["ayam bakar", "nasi padang", "nasi uduk", "nasi gudeg"];
  }, []);

  useEffect(() => {
    let data = fetchMenu();
    setMenu(data);
  }, [fetchMenu]); // <--- fetchMenu sbg dependency effect

  // Kode di atas tidak akan menyebabkan render loop, meskipun kita masukan fungsi fetchMenu sebagai dependency effect, karena nilai identity dari fungsi fetchMenu tidak akan pernah berubah antar render setelah dibungkus di dalam hook useCallback dengan dependency array kosong.

  return (
    <div>
      {menu.map((makanan, index) => (
        <div key={index}>{makanan}</div>
      ))}
    </div>
  );
};
export default Komponenku;
