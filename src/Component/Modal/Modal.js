import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, onClose, headline, children }) => {
  return (
    <>
      <div
        className="backdrop"
        style={{ display: open ? "block" : "none" }}
        onClick={onClose}
      ></div>
      {open && (
        <div className="modal" style={{ zIndex: 5 }}>
          <div className="modal-header">
            {headline && <h5 className="headline5 mb-0">{headline}</h5>}

            <AiOutlineClose
              className="alignself-center close-icon"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
