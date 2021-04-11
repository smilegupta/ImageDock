import React from "react";
import { collectionList } from "../../../config/dummydata";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Row>
      {collectionList.length > 0 ? (
        <>
          {" "}
          {collectionList.map((item, idx) => (
            <Col sm={12} lg={4} xl={3} md={6} key="idx">
              <Link to={`/collection/${item.collectionId}`}>
                <div
                  class="card rounded text-white bg-dark mb-3"
                  style={{ maxWidth: "20rem" }}
                >
                  <div class="card-header">Collection</div>
                  <div class="card-body">
                    <h4 class="card-title">{item.name}</h4>
                  </div>
                </div>
              </Link>
            </Col>
          ))}{" "}
        </>
      ) : (
        <Col className="text-center my-4">
          {" "}
          <h4> There's nothing to show here. </h4> <br />{" "}
          <Button>
            {" "} &nbsp;
            Upload Image{" "}
            <i class="las la-cloud-upload-alt" style={{ fontSize: "18px" }} />
          </Button>{" "}
        </Col>
      )}
    </Row>
  );
};

export default HomeScreen;
