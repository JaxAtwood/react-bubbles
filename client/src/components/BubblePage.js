import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
        console.log("FETCH", res);
        setColorList(res.data)
        console.log("HERE", colorList)
    })
    .catch(error => console.log(error.response));
  }, [])

  return (
    <div>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

/*
thats also b/c for your updateColors(//some JS code here). 
The JS code you'll have to use you'll have to map through 
colors & compare res.data.id with color.id (from the color props) & return res.data only if color.id & res.data.id are equal. otherwise you can just return the color (to use for updateColors) .  You dont need the setColorToEdit(colorTodEdit) in there .. you're sending the colorToEdit in your .put request
*/