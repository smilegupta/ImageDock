import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { uploadImage, imageStore, getRecentUploads } from "../../CRUD/uploadImage.crud"
import { CopyToClipboard } from "react-copy-to-clipboard";
toast.configure();
Modal.setAppElement("*");

const UploadImageModal = ({ modalStatus, setModalStatus, setApiResponse }) => {
  // State Variables
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [S3URL, setS3URL] = useState("");
  const [embededLinkText, setEmbededLinkText] = useState("")

  const onCopyText = () => {
    const message = "Text Copied Successfully";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const result = await uploadImage(file);
      setS3URL(result.data)
      imageStore(result.data)
      setEmbededLinkText(result.data)
      const res = await getRecentUploads()
      setApiResponse(res.data)
      const message = "Bingo! Your File has been Uploaded Successfully.";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    } catch (err) {
      let error = err.message || 'Something went wrong!';
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setLoading(false);
    }
  };

  const resetChanges = (e) => {
    e.preventDefault();
    setEmbededLinkText("");
    setS3URL("");
    setFile("");
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
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
            <div className="form-group">
              <label htmlFor="uploadedFile">Choose a Image to Upload</label>
              <input
                type="file"
                className="form-control-file"
                id="uploadedFile"
                aria-describedby="fileHelp"
                onChange={handleUpload}
                accept=".png,.jpeg, .jpg"
              />
              {S3URL && <span className="text-success">File Uploaded Successfully! </span>}
            </div>
            {
              S3URL && (<>
                <br />
                <div className="form-group">
                  <label htmlFor="embededLink"> Sharable Link &nbsp;
              <CopyToClipboard text={embededLinkText} onCopy={onCopyText}>
                      <i className="las la-copy cursor-pointer"></i>
                    </CopyToClipboard>
                  </label>
                  <textarea className="form-control" id="embededLink" rows="4" readOnly value={embededLinkText}  ></textarea>
                </div>

              </>)
            }

          </div>
          <div className="modal-footer" style={{ padding: "2rem" }}>
            <button
              type="button"
              onClick={(e) => resetChanges(e)}
              className="btn btn-light"
              disabled={loading}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={(e) => handleSubmit(e)}
              className="btn btn-dark"
              disabled={loading}
            >
              Upload{loading ? "  " : ""}
              <span className={loading ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UploadImageModal;
