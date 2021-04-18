/* eslint-disable react-hooks/exhaustive-deps */
import { useState, Fragment, useEffect } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Loader from "../../Common/Loader";
import NoImage from "../../../Images/infographic.svg";
import CreateCollection from "../../Modals/CreateCollection";
import { listCollection } from "../../../CRUD/collections.crud";

const HomeScreen = ({ auth }) => {
  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  const [apiResponse, setApiResponse] = useState();
  const userId = auth.user.attributes.sub;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listAllCollections();
  }, []);

  //  API to List all Collections a User Have
  const listAllCollections = async () => {
    const res = await listCollection(userId);
    setApiResponse(res.data);
    setLoading(false);
  };

  return (
    <Fragment>
      <Row className="mb-3">
        <Col className="text-right">
          <Link to="/home">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      <Row>
        {loading === true ? (
          <Loader />
        ) : (
          <Fragment>
            {apiResponse && apiResponse.length > 0 ? (
              <Fragment>
                <Col sm={12} lg={12} xl={12} md={12} className="no-gutters">
                  <h4>
                    My Memories{" "}
                    <i
                      className="las la-plus cursor-pointer"
                      onClick={() => setModalStatus(true)}
                    />
                  </h4>
                  <br />
                </Col>
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
                  &nbsp; Create Collection{" "}
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
    </Fragment>
  );
};

export default withRouter(HomeScreen);
