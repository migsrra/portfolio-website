import CarouselWrapper from "./styles/CarouselWrapper";
import SideItem from "./SideItem";
import CenterItem from "./CenterItem";
import CycleArrow from "./CycleArrow";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Modal from "../Modal";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Carousel = ({contentArray}) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1); //this will be the initial center item
  const [rightIndex, setRightIndex] = useState(2);
  const [modal, setModal] = useState(false);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => triggerCycle("left"),
    onSwipedRight: () => triggerCycle("right"),
    trackMouse: true
  });

  const handleModal = () =>{
    setModal(!modal);
  }

  if(modal) {
    disableBodyScroll(document);
  } else {
    enableBodyScroll(document);
  }


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
    <>
      <CarouselWrapper {...handleSwipe}>
        <CycleArrow direction = {"left"} onClick = {() => triggerCycle("right")}/>
        <div className="content-blocks">
          <SideItem content = {contentArray[leftIndex]} onClick = {() => triggerCycle("right")}/>
          <CenterItem content = {contentArray[centerIndex]} handleModal = {handleModal}/>
          <SideItem content = {contentArray[rightIndex]} onClick = {() => triggerCycle("left")}/>
        </div>
        <CycleArrow direction={"right"} onClick = {() => triggerCycle("left")}/>
      </CarouselWrapper>
      {modal ?
        <Modal handleModal = {handleModal} content = {contentArray[centerIndex]}/>:
        <></>
      }
    </>
  );
}

export default Carousel