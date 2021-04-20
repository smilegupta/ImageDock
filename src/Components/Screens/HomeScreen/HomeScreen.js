/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, Fragment, useEffect } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Loader from "../../Common/Loader";
import NoImage from "../../../Images/infographic.svg";
import CreateCollection from "../../Modals/CreateCollection";
import { listCollection, deleteCollection } from "../../../CRUD/collections.crud";
import EditCollection from "../../Modals/EditCollection";
import { toast } from "react-toastify";
toast.configure();

const HomeScreen = ({ auth }) => {
  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  const [editCollection, setEditCollection] = useState(false);
  const [apiResponse, setApiResponse] = useState();
  const userId = auth.user.attributes.sub;
  const [loading, setLoading] = useState(true);
  const [collectionId, setCollectionId] = useState();
  const [collectionName, setCollectionName] = useState();
  const [collectionDescription, setCollectionDescription] = useState();

  useEffect(() => {
    listAllCollections();
  }, []);

  //  API to List all Collections a User Have
  const listAllCollections = async () => {
    const res = await listCollection(userId);
    setApiResponse(res.data);
    setLoading(false);
  };

  // Edit Collection Details
  const editCollectionDetails = (
    e,
    collectionId,
    collectionName,
    collectionDescription
  ) => {
    e.preventDefault()
    setCollectionId(collectionId);
    setCollectionName(collectionName);
    setCollectionDescription(collectionDescription);
    setEditCollection(true);
  };

  //  API to delete Collections a User Have
  const deleteCollections = async (e, collectionId) => {
    e.preventDefault()
    try {
      await deleteCollection(collectionId, userId);
      const updatedList = await listCollection(userId);
      setApiResponse(updatedList.data);
      const message = "Bingo! New Album Have Created Successfully.";
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
  };
}

  return (
    <Fragment>
      <Row className="mb-3">
        <Col className="text-right">
          <Link to="/">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      <Row>
        {loading === true ? (
          <Loader />
        ) : (
          <Fragment>
            <Col sm={12} lg={12} xl={12} md={12} className="no-gutters">
              <h4>
                My Albums{" "}
                <i
                  className="las la-plus cursor-pointer"
                  onClick={() => setModalStatus(true)}
                />
              </h4>
              <br />
            </Col>
            {apiResponse && apiResponse.length > 0 ? (
              <Fragment>
                {apiResponse.map((item, idx) => (
                  <Col sm={12} lg={4} xl={3} md={6} key={idx}>
                    <Link
                      to={`/collection/${item.collectionId}/${item.collectionName}`}
                    >
                      <div
                        className="card rounded text-white bg-dark mb-3 image"
                        style={{ maxWidth: "20rem" }}
                      >
                        <div className="card-body text-center">
                          <h4 className="card-title">
                            {" "}
                            {item.collectionName}{" "}
                          </h4>
                          <hr />
                          <p className="card-text">
                            {item.collectionDescription}
                          </p>
                          <p className="text-right mt-2 mb-0">
                            {/* <i onClick={(e) => editCollectionDetails(e, item.collectionId, item.collectionName, item.collectionDescription) } className="las la-cog pl-2"></i> */}
                            <i onClick={(e) => deleteCollections(e, item.collectionId)} className="las la-trash pl-2"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}{" "}
              </Fragment>
            ) : (
              <Col className="text-center my-4">
                {" "}
                <Image src={NoImage} alt="empty" className="w-25" />
                <h4> There's nothing to show here. </h4> <br />{" "}
                <Button
                  className="btn btn-dark"
                  onClick={() => setModalStatus(true)}
                >
                  {" "}
                  &nbsp; Create Album{" "}
                </Button>{" "}
              </Col>
            )}
          </Fragment>
        )}
      </Row>
      <CreateCollection
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setApiResponse={setApiResponse}
        userId={userId}
      />
      <EditCollection
        settingsOpen={editCollection}
        setSettingsOpen={setEditCollection}
        name={collectionName}
        desc={collectionDescription}
        collectionId={collectionId}
        userId={userId}
      />
    </Fragment>
  );
};

export default withRouter(HomeScreen);
