import CenterItemWrapper from "./styles/CenterItemWrapper"

const CenterItem = ({content,handleModal}) => {
  return (
    <CenterItemWrapper onClick = {() =>handleModal()}>
      <img src={require("../../../resources/" + content.logoLocation)} draggable="false" height = "50px" alt="logo"/>
      <p>{content.company}</p>
    </CenterItemWrapper>
  );
} 

export default CenterItem;