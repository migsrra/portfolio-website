import SideItemWrapper from "./styles/SideItemWrapper";

const SideItem = ({content}) => {
  return (
    <SideItemWrapper>
      <p>{content.company}</p>
    </SideItemWrapper>
  );
}

export default SideItem;