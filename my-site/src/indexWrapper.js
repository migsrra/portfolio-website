import { createGlobalStyle } from "styled-components";

import PTSerifRegularTtf from "./fonts/PTSerif-Regular.ttf";
import RobotoSlabRegularTtf from "./fonts/RobotoSlab-Regular.ttf";
import Constants from "./utils/constants";

export default createGlobalStyle`
  @font-face {
    font-family: 'PTSerif';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${PTSerifRegularTtf});
  }
  @font-face {
    font-family: 'Roboto Slab';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${RobotoSlabRegularTtf});
  }
  body {
    background-color: ${Constants.backgroundColor};
  }
  a {
    text-decoration: none;
    color: ${Constants.textColor};
  }

`