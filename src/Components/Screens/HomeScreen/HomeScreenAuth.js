import React from "react";
import { collectionList } from "../../../config/dummydata";
import { Row, Col, Button, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import NoImage from '../../../infographic.svg'

const HomeScreenAuth = () => {
  return (
    <>
      <Row>
        {collectionList.length > 0 ? (
          <>
            <Col sm={12} lg={12} xl={12} md={12}>
              <h4 className="my-4">
                My Memories <i className="las la-plus cursor-pointer" />
              </h4>
            </Col>{" "}
            {collectionList.map((item, idx) => (
              <Col sm={12} lg={4} xl={3} md={6} key={idx}>
                <Link to={`/collection/${item.collectionId}`}>
                  <div
                    className="card rounded text-white bg-dark mb-3"
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
            <Image src={NoImage} alt="empty" height={200} />
            <h4> There's nothing to show here. </h4> <br />{" "}
            <Button className="btn btn-dark">
              {" "}
              &nbsp; Upload Image{" "}
              <i
                className="las la-cloud-upload-alt"
                style={{ fontSize: "18px" }}
              />
            </Button>{" "}
          </Col>
        )}
      </Row>
    </>
  );
};

export default HomeScreenAuth;
