import CarouselWrapper from "./styles/CarouselWrapper";
import SideItem from "./SideItem";
import CenterItem from "./CenterItem";
import CycleArrow from "./CycleArrow";
import { useState } from "react";
const Carousel = ({contentArray}) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1); //this will be the initial center item
  const [rightIndex, setRightIndex] = useState(2);

  const triggerCycle = (direction) => {
    let contentArrLength = contentArray.length;
    if (direction === "left") {
      if (rightIndex === contentArrLength - 1) {
        setCenterIndex(rightIndex);
        setLeftIndex(centerIndex);
        setRightIndex(0);
      }
      else{
        setCenterIndex(rightIndex);
        setLeftIndex(centerIndex);
        setRightIndex(rightIndex + 1);
      }
    } 
    else {
      if (leftIndex === 0) {
        setCenterIndex(leftIndex);
        setLeftIndex(contentArrLength - 1);
        setRightIndex(centerIndex);
      }
      else{
        setCenterIndex(leftIndex);
        setLeftIndex(leftIndex - 1);
        setRightIndex(centerIndex);
      }
    }
  }

  return (
    <CarouselWrapper>
      <CycleArrow direction = {"left"} onClick = {() => triggerCycle("left")}/>
      <div className="content-blocks">
        <SideItem content = {contentArray[leftIndex]}/>
        <CenterItem content = {contentArray[centerIndex]} />
        <SideItem content = {contentArray[rightIndex]}/>
      </div>
      <CycleArrow direction={"right"} onClick = {() => triggerCycle("right")}/>
    </CarouselWrapper>
  );
}

export default Carousel