import React from "react";
import { collectionList } from "../../../config/dummydata";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Row>
      {collectionList.map((item) => (
        <>
          {" "}
          <Col sm={12} lg={4} xl={3} md={6}>
            <a href={`/collection/${item.collectionId}`}>
              <div
                class="card rounded text-white bg-dark mb-3"
                style={{ maxWidth: "20rem" }}
              >
                <div class="card-header">Collection</div>
                <div class="card-body">
                  <h4 class="card-title">{item.name}</h4>
                </div>
              </div>
            </a>
          </Col>
        </>
      ))}
    </Row>
  );
};

export default HomeScreen;
