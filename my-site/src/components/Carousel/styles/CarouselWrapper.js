import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 0.5vw;
  .content-blocks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7vw;
  }
`
export default CarouselWrapper;