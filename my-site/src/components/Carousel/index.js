import CarouselWrapper from "./styles/CarouselWrapper";
import SideItem from "./SideItem";
import CenterItem from "./CenterItem";
import CycleArrow from "./CycleArrow";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Modal from "../Modal";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { motion } from "framer-motion";

const Carousel = ({contentArray}) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1); //this will be the initial center item
  const [rightIndex, setRightIndex] = useState(2);
  const [modal, setModal] = useState(false);
  const [moveRight, setMoveRight] = useState(null);

  const MotionCenterItem = motion.create(CenterItem);
  const MotionSideItem = motion.create(SideItem);

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
      setMoveRight(false);
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
      setMoveRight(true);
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

  const carouselVariants = {
    initialLeft: { x: "-100%" },
    initialRight: { x: "100%" },
    center: { x: 0 },
  };

  const carouselTransition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
  };

  return (
    <>
      <CarouselWrapper {...handleSwipe}>
        <CycleArrow direction = {"left"} onClick = {() => triggerCycle("left")}/>
        <div className="content-blocks">
          <MotionSideItem 
            initial={moveRight ? "initialLeft" : "initialRight"}
            animate="center"
            exit= {moveRight ? "initialRight" : "initialLeft"}
            variants={carouselVariants}
            transition={carouselTransition}
            content = {contentArray[leftIndex]} 
            onClick = {() => triggerCycle("right")}
          />
          <MotionCenterItem 
            initial={moveRight ? "initialLeft" : "initialRight"}
            animate="center"
            exit={moveRight ? "initialRight" : "initialLeft"}
            variants={carouselVariants}
            transition={carouselTransition}
            content = {contentArray[centerIndex]} 
            handleModal = {handleModal}
          />
          <MotionSideItem 
            initial={moveRight ? "initialLeft" : "initialRight"}
            animate="center"
            exit={moveRight ? "initialRight" : "initialLeft"}
            variants={carouselVariants}
            transition={carouselTransition}
            content = {contentArray[rightIndex]} 
            onClick = {() => triggerCycle("left")}
          />
        </div>
        <CycleArrow direction={"right"} onClick = {() => triggerCycle("right")}/>
      </CarouselWrapper>
      {modal ?
        <Modal handleModal = {handleModal} content = {contentArray[centerIndex]}/>:
        <></>
      }
    </>
  );
}

export default Carousel