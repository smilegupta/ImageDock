import {useState, Fragment, useEffect} from "react";
import { Row, Col, Button, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import NoImage from '../../../Images/infographic.svg'
import CreateCollection  from "../../Modals/CreateCollection"
import { listCollection } from '../../../CRUD/collections.crud'

const HomeScreen = () => {
  // State Variables
  const [modalStatus, setModalStatus ] = useState(false);
  const [apiResponse, setApiResponse] = useState();

  useEffect(() => {
		recentUploadsResponse();
	}, []); 

  const recentUploadsResponse = async () => {
		const res = await listCollection();
    setApiResponse(res.data)
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
        {apiResponse && apiResponse.length > 0 ? (
          <Fragment>
            <Col sm={12} lg={12} xl={12} md={12} className="no-gutters">
              <h4>
                My Memories <i className="las la-plus cursor-pointer" onClick={() => setModalStatus(true)}  />
              </h4>
              <br />
            </Col>
            {apiResponse.map((item, idx) => (
              <Col sm={12} lg={4} xl={3} md={6} key={idx}>
                <Link to={`/collection/${item.collectionId}`}>
                  <div
                    className="card rounded text-white bg-dark mb-3 image"
                    style={{ maxWidth: "20rem" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title"> {item.collectionName} </h4>
                      <hr />
                      <p className="card-text">{item.collectionDescription}</p>
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
            <Button className="btn btn-dark" onClick={() => setModalStatus(true)} >
              {" "}
              &nbsp; Create Collection {" "}
              <i
                className="las la-cloud-upload-alt"
                style={{ fontSize: "18px" }}
              />
            </Button>{" "}
          </Col>
        )}
      </Row>
      <CreateCollection modalStatus={modalStatus} setModalStatus={setModalStatus} setApiResponse={setApiResponse} />
    </Fragment>
  );
};

export default HomeScreen;
