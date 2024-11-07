import SideItemWrapper from "./styles/SideItemWrapper";
import React from "react";

const SideItem = React.forwardRef(({content, onClick},ref) => {
  return (
    <SideItemWrapper onClick = {onClick} ref={ref}>
      <img src={require("../../../resources/" + content.logoLocation)} draggable="false" height = "50px" alt="logo"/>
    </SideItemWrapper>
  );
})

export default SideItem;