import React from "react";

const unreadMessage = "Halo Fajri";

const ConditionalRendering = ({ message = unreadMessage }) => {
  return (
    <>
      <div>
        {message.length > 0 && (
          <div>
            <h2>Kamu memiliki {message.length} pesan yang belum dibaca</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ConditionalRendering;
