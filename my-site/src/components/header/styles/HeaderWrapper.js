import styled from "styled-components";
import Constants from "../../../utils/constants";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  margin-bottom: 100px;
  border-bottom: 1px solid ${Constants.borderColor};
  
  .header{
    font-family: 'Roboto Normal';
    font-weight: normal;
    font-weight: 500;
    font-size: 16px;
    box-sizing: border-box;
    height: 60px;    
    background-color: ${Constants.backgroundColor};
        
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    a {
      color: ${Constants.headerTextColor};
      transition: all 0.3s ease 0s;
    }
    a:hover{
      color: ${Constants.textHover};
    }
    .active{
      color: ${Constants.textHover};
    }
    
  } 
  .nav_links {
    list-style: none;
  }
  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
  }
  
`

export default HeaderWrapper;