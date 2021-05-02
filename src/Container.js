import Player from "./Player";
import { useState } from "react";

const Container = () => {
  const [unusedColors, setColor] = useState(["Purple", "HotPink", "Olive"]);
  const [changed, setchanged] =useState(false);

  const updateColors = function (event, currentColor) {
    let index = unusedColors.indexOf(event.target.value);
    let newcolors = unusedColors;
    newcolors.splice(index, 1);
    newcolors.push(currentColor);
    setColor(newcolors);
    console.log("newcolor:" + unusedColors);
  };

  return (
    <>
      <Player key={1} ID={1} color={"Blue"} unused={unusedColors} setunused = {updateColors} changed={changed} setchange={setchanged}/>
      <Player key={2} ID={2} color={"Red"} unused={unusedColors} setunused = {updateColors} changed={changed} setchange={setchanged}/>
      <Player key={3} ID={3} color={"Green"} unused={unusedColors} setunused = {updateColors} changed={changed} setchange={setchanged}/>
      <Player key={4} ID={4} color={"Yellow"} unused={unusedColors} setunused = {updateColors} changed={changed} setchange={setchanged}/>

      
    </>
  );
};


export default Container;
