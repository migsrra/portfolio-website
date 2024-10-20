import CenterItemWrapper from "./styles/CenterItemWrapper"

const CenterItem = ({content}) => {
  return (
    <CenterItemWrapper>
      <img src={require("../../../resources/" + content.logoLocation)} draggable="false" height = "50px" alt="logo"/>
      <p>{content.company}</p>
    </CenterItemWrapper>
  );
} 

export default CenterItem;