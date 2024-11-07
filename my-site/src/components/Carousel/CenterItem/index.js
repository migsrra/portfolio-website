import CenterItemWrapper from "./styles/CenterItemWrapper"
import React from "react";

const CenterItem = React.forwardRef(({content, handleModal}, ref) => {
  return (
    <CenterItemWrapper onClick = {() =>handleModal()} ref = {ref}>
      <img src={require("../../../resources/" + content.logoLocation)} draggable="false" height = "50px" alt="logo"/>
      <p>{content.company}</p>
    </CenterItemWrapper>
  );
})

export default CenterItem;