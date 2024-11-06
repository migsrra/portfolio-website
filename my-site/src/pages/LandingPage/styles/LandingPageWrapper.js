import styled from "styled-components";
import Constants from "../../../utils/constants";

const LandingPageWrapper = styled.div`
  color: ${Constants.textColor};
  font-family: "Roboto Light";
  font-weight: normal;
  font-style: normal;
  text-align: center;
  padding: 70px 0 30px 0;
  height: 820px;
  display: flex;
  flex-direction: column;
  
  .intro-text {
    margin-top: 140px;
    h1 {
      font-size: 40px;
      margin-bottom: 13px;
    }
    p {
      margin-bottom: 8px;
      font-size: 20px;
    }
  }

  .marquee{
    margin-top: 85px;
    width: 50vw;
    align-self: center;
    border-radius: 15px;
    img{
      padding: 20px;
    }
  }

  button {
    margin-top: 8px;
    display: inline-block;
    color: ${Constants.textColor};
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
    box-shadow: 0 3px 4px ${Constants.headerTextColor};
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
      bottom: -16px;
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
    box-shadow: 0 0px ${Constants.headerTextColor};
  }
`;
export default LandingPageWrapper;
