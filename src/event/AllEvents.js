import React from "react";

const AllEvents = () => {
  return (
    <table style={{ border: "1px solid #000" }}>
      <tbody>
        <tr>
          <th>Event</th>
          <th>Contoh</th>
          <th>Elemen HTML</th>
        </tr>
        <tr>
          <td>onClick</td>
          <td>
            <button onClick={() => alert("onClick")}> onClick </button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onDoubleClick</td>
          <td>
            <button onDoubleClick={() => alert("onDoubleClick")}>
              {" "}
              onDoubleClick{" "}
            </button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onDragStart</td>
          <td>
            <input
              onDragStart={() => alert("dragStart")}
              defaultValue="onDragStart"
            />
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onDrop</td>
          <td>
            <input onDrop={() => alert("drop")} defaultValue="onDrop" />
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onKey</td>
          <td>
            <input
              onKeyDown={() => alert("onKeyDown")}
              onKeyUp={() => alert("onKeyUp")}
              onKeyPress={() => alert("onKeyPress")}
              defaultValue="onKey"
            />
          </td>
          <td>input, textarea, select, button</td>
        </tr>
        <tr>
          <td>onFocus, onBlur & onSelect</td>
          <td>
            <input
              onFocus={() => alert("onFocus")}
              onBlur={() => alert("onBlur")}
              onSelect={() => alert("onSelect")}
              defaultValue=""
            />
          </td>
          <td>input, textarea, select, button</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>
            <input onChange={() => alert("onChange")} defaultValue="onChange" />
            <br />
            <input
              type="radio"
              name="gender"
              onChange={() => alert("1")}
              value="1"
            />{" "}
            Pria
            <input
              type="radio"
              name="gender"
              onChange={() => alert("0")}
              value="0"
            />{" "}
            Wanita
            <br />
            <select onChange={() => alert("onChange")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>input, textarea, select, button</td>
        </tr>
        <tr>
          <td>onCopy, onCut, onPaste</td>
          <td>
            <input
              onCopy={() => alert("onCopy")}
              onCut={() => alert("onCut")}
              onPaste={() => alert("onPaste")}
              defaultValue="clipboard"
            />
          </td>
          <td>semua</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AllEvents;
