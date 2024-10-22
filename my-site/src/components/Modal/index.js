import ModalWrapper from "./styles/ModalWrapper";

const Modal = ({handleModal}) => {
  return (
    <ModalWrapper>
      <div onClick={() =>handleModal()} className="overlay"></div>
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>
          Ex labore officia eu nostrud quis elit adipisicing proident voluptate
          consectetur enim magna dolor. Anim cupidatat exercitation in tempor.
          Id adipisicing aute officia veniam amet enim labore ut. Quis irure
          exercitation esse consectetur culpa enim nulla exercitation Lorem enim
          consequat duis dolor.
        </p>
        <button onClick={handleModal} className="close-modal">X</button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
