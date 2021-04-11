import React from "react";
import { collectionList } from "../../../config/dummydata";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Row>
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
      ))}
    </Row>
  );
};

export default HomeScreen;
