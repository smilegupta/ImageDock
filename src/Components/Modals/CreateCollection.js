import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("*");

const CreateCollection = ({ modalStatus, setModalStatus }) => {
  // State Variables
  const [collectionName, setCollectionName] = useState('');
  const [collectionDesc, setCollectionDesc] = useState('');
  const [error, setError] = useState("");

  // Handle Submit Function
  const validateFields = () => {
    setError("");
    if (collectionName === null || collectionName === "") {
      setError("Please enter a collection name");
      return false;
    }
    return true;
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
            <h5 className="modal-title">Create Collection</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalStatus(false)}
            >
              <span> &times; </span>
            </button>
          </div>
          <div className="modal-body" style={{ padding: "2rem" }}>
            <form>
              <div className="form-group">
                <label htmlFor="collectionName">Collection Name*</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="collectionName"
                  id="collectionName"
                  value={collectionName}
                  placeholder="For Eg: Goa Trip"
                  onChange={(e) => {
                    setCollectionName(e.target.value);
                  }}
                  onBlur={validateFields}
                />
                <div className="text-danger">{error || ""}</div>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  value={collectionDesc}
                  placeholder="For Eg: Glipmse of the Goa Trip I went with Srushith Shaina and Prachitesh"
                  onChange={(e) => {
                    setCollectionDesc(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer" style={{ padding: "2rem" }}>
            <button
              type="button"
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary"
            >
              Create Collection
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCollection;
