import styled from "styled-components";
import Constants from "../../../utils/constants";

const ExperienceWrapper = styled.div`
  color: ${Constants.textColor};
  font-family: "Roboto Light";
  font-weight: normal;
  font-style: normal;
  h1{
    margin-bottom: 5px;
    margin-top:0px;
  }
  .carousel-wrapper{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      font-size: 25px;
    }
  }
`;

export default ExperienceWrapper;