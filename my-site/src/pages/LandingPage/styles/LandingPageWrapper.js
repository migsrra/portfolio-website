import styled from "styled-components";
import Constants from "../../../utils/constants";

const LandingPageWrapper = styled.div`
  color: ${Constants.homeTextColor};
  font-family: "Roboto Light";
  font-weight: normal;
  font-style: normal;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 0 30px 0;
  //border: 3px solid red;

  .intro-text {
    h1 {
      font-size: 40px;
      margin-bottom: 5px;
    }
    p {
      font-size: 20px;
    }
  }

  button {
    display: inline-block;
    color: ${Constants.homeTextColor};
    font-size: 16px;
    font-family: "Roboto Normal";
    font-weight: normal;
    font-style: normal;

    padding: 5px 15px 5px 15px;
    height: 50px;
    border: none;
    text-align: center;
    text-decoration: none;
    background-color: ${Constants.buttonColor};
    border-radius: 10px;
    box-shadow: 0 3px 4px ${Constants.textColor};
    transition: all 0.1s;
    cursor: pointer;

    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }
    span:after {
      content: "\u2B9F";
      position: absolute;
      opacity: 0;
      bottom: -30px;
      left: 0;
      right: 0;
      transition: 0.5s;
    }
  }
  button:hover span {
    padding-bottom:20px;
  }
  button:hover span:after {
    opacity: 1;
    bottom: 0;
  }
  button:active {
    transform: translateY(2px);
    box-shadow: 0 0px ${Constants.textColor};
  }
`;
export default LandingPageWrapper;
