//import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("*");

const UploadImageModal = ({ modalStatus, setModalStatus }) => {
  // State Variables
//   const [collectionName, setCollectionName] = useState(name);
//   const [collectionDesc, setCollectionDesc] = useState(desc);
//   const [error, setError] = useState("");

  // Handle Submit Function
  const validateFields = () => {
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    console.log("API Calling");
  };

  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={() => setModalStatus(false)}
      className="react-modal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{ padding: "2rem" }}>
            <h5 className="modal-title">Upload Image</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalStatus(false)}
            >
              <span> &times; </span>
            </button>
          </div>
          <div className="modal-body" style={{ padding: "2rem" }}>
            
          </div>
          <div className="modal-footer" style={{ padding: "2rem" }}>
            <button
              type="button"
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UploadImageModal;
