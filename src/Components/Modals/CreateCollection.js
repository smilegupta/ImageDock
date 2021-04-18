import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { createCollection, listCollection } from "../../CRUD/collections.crud";
toast.configure();
Modal.setAppElement("*");

const CreateCollection = ({
  modalStatus,
  setModalStatus,
  setApiResponse,
  userId,
}) => {
  // State Variables
  const [collectionName, setCollectionName] = useState("");
  const [collectionDesc, setCollectionDesc] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validating that Collection Name
  const validateFields = () => {
    setError("");
    if (collectionName === null || collectionName === "") {
      setError("Please enter a collection name");
      return false;
    }
    return true;
  };

  // Creating Collection API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    try {
      await createCollection(collectionName, collectionDesc, userId);
      const updatedList = await listCollection(userId);
      setApiResponse(updatedList.data);
      const message = "Bingo! New Collection Have Created Successfully.";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setModalStatus(false);
      setCollectionDesc("");
      setCollectionName("");
      setLoading(false);
    } catch (err) {
      let error = err.message || "Something went wrong!";
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    }
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
              disabled={loading}
            >
              Create Collection {loading ? "  " : ""}
              <span
                className={loading ? "spinner-border spinner-border-sm" : ""}
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCollection;
