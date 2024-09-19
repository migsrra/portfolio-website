import CenterItemWrapper from "./styles/CenterItemWrapper"

const CenterItem = ({content}) => {
  return (
    <CenterItemWrapper>
      <p>{content.company}</p>
    </CenterItemWrapper>
  );
} 

export default CenterItem;