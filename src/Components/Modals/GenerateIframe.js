import Modal from "react-modal";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
toast.configure();
Modal.setAppElement("*");

const GenerateIframe = ({
  modalStatus,
  setModalStatus,
  collectionId,
  userId,
  collectionName,
}) => {
  // Iframe Embedded Code
  const finalCollectionName = collectionName.replace(/ /g, "%20");
  const embededLink = `https://image-dock.smilegupta.tech/showcase/${userId}/${collectionId}/${finalCollectionName}`;
  const iFrameCode = `<iframe width="560" height="315" src=${embededLink}></iframe>`;

  // Function to Copy the Embeded Link
  const onCopyText = () => {
    const message = "Link Copied Successfully";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <Modal
        isOpen={modalStatus}
        onRequestClose={() => setModalStatus(false)}
        className="react-modal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ padding: "1.5rem" }}>
              <h5 className="modal-title">Album I-Frame </h5>
              <button
                type="button"
                className="close"
                onClick={() => setModalStatus(false)}
              >
                <span> &times; </span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: "1.5rem" }}>
              <div className="form-group">
                <label htmlFor="embededLink">
                  {" "}
                  Embedded Code &nbsp;
                  <CopyToClipboard text={iFrameCode} onCopy={onCopyText}>
                    <i className="las la-copy cursor-pointer"></i>
                  </CopyToClipboard>
                </label>
                <textarea
                  className="form-control"
                  id="embededLink"
                  rows="4"
                  readOnly
                  value={iFrameCode}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer" style={{ padding: "1.5rem" }}>
              <button
                type="button"
                onClick={() => setModalStatus(false)}
                className="btn btn-dark"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GenerateIframe;
