/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Modal from "react-modal";
Modal.setAppElement("*");

const EditCollection = ({ settingsOpen, setSettingsOpen, name, desc, collectionId, userId }) => {
  // State Variables
  const [collectionName, setCollectionName] = useState('');
  const [collectionDesc, setCollectionDesc] = useState('');
  const [error, setError] = useState("");

  useEffect(() => {
    if(settingsOpen){
      setCollectionName(name)
      setCollectionDesc(desc)
    }else{
      setCollectionName("")
      setCollectionDesc("")
    }
  }, [settingsOpen])

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

  };

  return (
    <Modal
      isOpen={settingsOpen}
      onRequestClose={() => setSettingsOpen(false)}
      className="react-modal"
    >
      
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{ padding: "1.5rem" }}>
            <h5 className="modal-title">Collection Settings</h5>
            <button
              type="button"
              className="close"
              onClick={() => setSettingsOpen(false)}
            >
              <span> &times; </span>
            </button>
          </div>
          <div className="modal-body" style={{ padding: "1.5rem" }}>
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
          <div className="modal-footer" style={{ padding: "1.5rem" }}>
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

export default EditCollection;
