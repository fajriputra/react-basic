import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    if (!friends) return;
    console.log(`EFFECT: membuka pesan dari ${friends}`);

    return () => {
      console.log(`EFFECT: menutup pesan dari ${friends}`);
    };
  }, [friends]);

  friends && console.log(`RENDER: friend ${friends}`);
  return (
    <div>
      <button onClick={(e) => setFriends("Fajri")}>Fajri</button>
      <button onClick={(e) => setFriends("Putra")}>Putra</button>
      <br /> <br />
      {friends ? `friends ${friends}` : "no opened friend"}
    </div>
  );
};

export default CleanUp;
