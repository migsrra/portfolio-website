import SideItemWrapper from "./styles/SideItemWrapper";


const SideItem = ({content}) => {
  return (
    <SideItemWrapper>
      <img src={require("../../../resources/" + content.logoLocation)} draggable="false" height = "50px" alt="logo"/>
    </SideItemWrapper>
  );
}

export default SideItem;