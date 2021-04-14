import { useState } from "react";
import Modal from "react-modal";
import { Image } from "react-bootstrap";
import {uploadLogo} from "../../CRUD/uploadImage.crud"
Modal.setAppElement("*");

const UploadImageModal = ({ modalStatus, setModalStatus }) => {
  // State Variables
  const [file, setFile] = useState("");

  // Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadLogo(file).then((result) => {
      console.log(result)
    }).catch((err) => {
        console.log(err)
    })
  };

  function handleUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file)
    reader.onloadend = () => {
      setFile(reader.result)
    };
    reader.readAsDataURL(file);
  }

  

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
            <div class="form-group">
              <label for="exampleInputFile">File input</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
                onChange={handleUpload}
              />
              {file && <Image src={file} />}
              
            </div>
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
