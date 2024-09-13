import styled from "styled-components";
import Constants from "../../../utils/constants";

const HeaderWrapper = styled.header`
  .header{
    font-family: 'Roboto Slab';
    font-weight: normal;
    font-weight: 500;
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;

    a {
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