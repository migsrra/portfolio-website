import styled from "styled-components";

const CenterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
  img{
    padding-top: 30px;
    transform: scale(150%);
    padding-bottom: 10px;
  }
  p{
    font-size: 20px;
    padding-bottom: 8px;
    text-align: center;
  }
`
export default CenterItemWrapper;