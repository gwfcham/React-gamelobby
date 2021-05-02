import { useState } from "react";

const Player = ({ ID, color, unused, setunused, changed, setchange }) => {
    const [current , setcurrent] = useState(color);


    const makeOption = function (x) {
        return <option value={x}>{x}</option>;
      };
      

  return (
    <div
      className="Player"
      style={{ width: "33vh", height: "auto", backgroundColor: current, display: "flex" }}
    >
      <h1> Player {ID}</h1>
      <select
        key={"select" + ID}
        value={current}
        onChange={(e) => {
          setunused(e, current);
          setcurrent(e.target.value);
          setchange(!changed);
        }}>
        <option value={current}>{current}</option>
        {unused.map(makeOption)}
      </select>
    </div>
  );
};

export default Player;
