import ModalWrapper from "./styles/ModalWrapper";

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
      </div>
    </ModalWrapper>
  );
};

export default Modal;
