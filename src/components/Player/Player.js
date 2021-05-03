import { useState } from "react";
import styles from './Player.module.css';

const Player = ({ ID, color, unused, setunused, changed, setchange }) => {
    const [current , setcurrent] = useState(color);


    const makeOption = function (x) {
        return <option value={x}>{x}</option>;
      };
      

  return (
    <div className={styles.Player}
    style={{backgroundColor: current}}>
      <h2> Player {ID}</h2>
      <select className="unusedColors"
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
