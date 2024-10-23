import styled from "styled-components";

const CenterItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  
  img{
    padding-top: 28px;
    transform: scale(150%);
    margin-bottom: 18px;
    margin-top: 8px;
  }
  p{
    margin-top: 12px;
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
  }
`
export default CenterItemWrapper;