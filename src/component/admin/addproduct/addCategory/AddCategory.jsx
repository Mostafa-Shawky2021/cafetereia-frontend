import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block show" : "modal display-none";
  console.log(showHideClassName);
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="modal-footer justify-content-center">
            <button className="btn btn-primary text-center mr-auto" type="button" onClick={()=>handleClose(false)}>
                Close
            </button>
          </div>
        </section>
      </div>
    );
  };

export default Modal;