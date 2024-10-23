import styled from "styled-components";
import Constants from "../../../utils/constants";

const ExperienceWrapper = styled.div`
  color: ${Constants.textColor};
  font-family: "Roboto Light";
  font-weight: normal;
  font-style: normal;
  height: 990px;

  h1{
    margin-bottom: 13px;
    margin-top: 24px;
    margin-left: 24px;
  }
  .description{
    margin-top: 8px;
    padding-left: 24px;
  }
  .carousel-wrapper{
    margin-top: 60px;
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
