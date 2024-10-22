import CarouselWrapper from "./styles/CarouselWrapper";
import SideItem from "./SideItem";
import CenterItem from "./CenterItem";
import CycleArrow from "./CycleArrow";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Modal from "../Modal";

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
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
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
    <CarouselWrapper {...handleSwipe}>
      <CycleArrow direction = {"left"} onClick = {() => triggerCycle("left")}/>
      <div className="content-blocks">
        <SideItem content = {contentArray[leftIndex]}/>
        <CenterItem content = {contentArray[centerIndex]} handleModal = {handleModal}/>
        <SideItem content = {contentArray[rightIndex]}/>
      </div>
      {modal ?
        <Modal handleModal = {handleModal}></Modal> :
        <></>
      }
      <CycleArrow direction={"right"} onClick = {() => triggerCycle("right")}/>
    </CarouselWrapper>
  );
}

export default Carousel