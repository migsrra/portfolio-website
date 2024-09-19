import CycleArrowWrapper from "./styles/CycleArrowWrapper";

const CycleArrow = ({direction, onClick}) => {
  return (
    <CycleArrowWrapper>
      {
        direction === "left" ? (
          <button onClick = {onClick}>{"<"}</button>
        ) : (
          <button onClick = {onClick}>{">"}</button>
        )
      }
    </CycleArrowWrapper>
  );
}
export default CycleArrow