import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  color: black;
  font-weight: 600;
  .overlay{
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
  }
  .modal-content{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;

    h2{
      margin-top: 8px;
      font-weight: bold;
      line-height: 24px;
      margin-bottom: 10px;
    }
    h3{
      margin-top: 8px;
    }
    h4{
    }
    p{
      margin-top: 16px;
    }
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
  }

  body.active-modal {
    overflow-y: hidden;
  }
`;

export default ModalWrapper;