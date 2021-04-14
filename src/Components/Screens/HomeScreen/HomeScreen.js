import {useState} from "react";
import { collectionList } from "../../../config/dummydata";
import { Row, Col, Button, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import NoImage from '../../../Images/infographic.svg'
import CreateCollection  from "../../Modals/CreateCollection"

const HomeScreen = () => {
  // State Variables
  const [modalStatus, setModalStatus ] = useState(false);
  return (
    <>
      <Row className="my-4">
        {collectionList.length > 0 ? (
          <>
            <Col sm={12} lg={12} xl={12} md={12} className="no-gutters">
              <h4>
                My Memories <i className="las la-plus cursor-pointer" onClick={() => setModalStatus(true)}  />
              </h4>
            </Col>
            {collectionList.map((item, idx) => (
              <Col sm={12} lg={4} xl={3} md={6} key={idx}>
                <Link to={`/collection/${item.collectionId}`}>
                  <div
                    className="card rounded text-white bg-dark mb-3 image"
                    style={{ maxWidth: "20rem" }}
                  >
                    <div className="card-body text-center">
                      <h4 className="card-title"> {item.name} </h4>
                      <hr />
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}{" "}
          </>
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
      <CreateCollection modalStatus={modalStatus} setModalStatus={setModalStatus} />
    </>
  );
};

export default HomeScreen;
