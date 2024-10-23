import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 16px;
  margin-top: 10px;
  user-select: none;
  width: 500px;
  height: 200px;

  .content-blocks {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export default CarouselWrapper;