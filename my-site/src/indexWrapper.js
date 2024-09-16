import { createGlobalStyle } from "styled-components";

import PTSerifRegularTtf from "./fonts/PTSerif-Regular.ttf";
import RobotoSlabRegularTtf from "./fonts/RobotoSlab-Regular.ttf";
import RobotoSlabBoldTtf from "./fonts/RobotoSlab-Bold.ttf";
import RobotoSlabLightTtf from "./fonts/RobotoSlab-Light.ttf";

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
    font-family: 'Roboto Normal';
    font-display: swap;
    src: url(${RobotoSlabRegularTtf});
  }
  @font-face {
    font-family: 'Roboto Bold';
    font-display: swap;
    src: url('${RobotoSlabBoldTtf}');
  }
  @font-face {
    font-family: 'Roboto Light';
    font-display: swap;
    src: url('${RobotoSlabLightTtf}');
  }
  html, body, #root {
    background-color: ${Constants.backgroundColor};
  }
  a {
    text-decoration: none;
  }

`