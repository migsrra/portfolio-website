import ModalWrapper from "./styles/ModalWrapper";
import Content from "../../utils/content";

const Modal = ({handleModal,content}) => {
  return (
    <ModalWrapper>
      <div onClick={() =>handleModal()} className="overlay"></div>
      <div className="modal-content">
        <h2>{content.title}</h2>
        <h3>{content.company}</h3>
        <h4>{content.date}</h4>
        <p>
          {content.description}
        </p>
        <button onClick={handleModal} className="close-modal">X</button>
        <p>Tech Stack:</p>
        <div className="tech-stack-imgs">
          {
            content.technologies.map((tech, i) => (
              <div className="tech-stack-img" key={i}>
                <img src={require("../../resources/tech-stack-images/" + Content.TechLocationMappings[tech])} draggable="false" alt="tech-logo" key={i}/>
                <p>{tech}</p>
              </div>
            ))
          }
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
