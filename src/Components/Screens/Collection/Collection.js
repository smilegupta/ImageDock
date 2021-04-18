/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { getCollection } from "../../../CRUD/collections.crud";
import addImage from "../../../Images/addImage.svg";
import UploadImageModal from "../../Modals/UploadImageCollection";
import NoImage from "../../../Images/infographic.svg";
import Loader from "../../Common/Loader";
import GenerateIframe from "../../Modals/GenerateIframe"

const Collection = ({ match, auth }) => {
  // Important Values
  const userId = auth.user.attributes.sub;
  const collectionName = match.params.name;
  const collectionId = match.params.id;

  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  const [collection, setCollection] = useState();
  const [loading, setLoading] = useState(true);
  const [iframeModal, setIframeModal] = useState(true);

  useEffect(() => {
    getCollectionResponse();
  }, []);

  // API to get all images stored in a particular collection
  const getCollectionResponse = async () => {
    const res = await getCollection(collectionId, userId);
    setCollection(res.data);
    setLoading(false);
  };

  return (
    <div>
      <Row className="mb-3">
        <Col className="text-right">
          <Link to="/home">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      {loading === true ? (
        <Loader />
      ) : (
        <Fragment>
          <Row className="mb-2">
            <Col className="text-lg-left text-center">
              <h4>{collectionName} <i className="las la-file-code cursor-pointer" onClick={() => setIframeModal(true)}></i> </h4>
            </Col>
          </Row>
          {collection && collection.length > 0 ? (
            <Fragment>
              <Row>
                {collection.map((item, idx) => (
                  <Fragment>
                    {item.imageUrl && (
                      <Col sm={4} lg={3} xl={3} md={4} xs={6} key={idx}
                      className="d-flex justify-content-center p-2" >
                      <Image
                        className="image cursor-pointer w-100"
                        src={item.imageUrl}
                        alt="Images"
                        style={{ border: "2px solid #000000" }}
                      />
                    </Col>
                    )}
                  </Fragment>
                ))}
                <Col
                  sm={6}
                  lg={4}
                  xl={3}
                  md={6}
                  className="d-flex justify-content-center p-4 mb-2 my-auto"
                >
                  <Image
                    className="image cursor-pointer"
                    src={addImage}
                    alt="add"
                    height={135}
                    onClick={() => setModalStatus(true)}
                  />
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col className="text-center my-4">
                {" "}
                <Image src={NoImage} alt="empty" className="w-25" />
                <h4> There's nothing to show here. </h4> <br />{" "}
                <Button
                  className="btn btn-dark"
                  onClick={() => setModalStatus(true)}
                >
                  {" "}
                  &nbsp; Add to Album {" "}
                </Button>{" "}
              </Col>
            </Row>
          )}
        </Fragment>
      )}
      <UploadImageModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setApiResponse={setCollection}
        collectionId={collectionId}
        userId={userId}
      />
      <GenerateIframe modalStatus={iframeModal}
        setModalStatus={setIframeModal}
        collectionId={collectionId}
        collectionName={collectionName}
        userId={userId} />
    </div>
  );
};

export default Collection;
