import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { collectionList } from "../../../config/dummydata";

const Collection = ({ match }) => {
  const collection = collectionList.find(
    (item) => item.collectionId === match.params.id
  ).collection;
  console.log(collection);
  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Link to="/">
            <i class="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="text-lg-left text-center">
          <h4> Collection: {collection[0].name}</h4>
        </Col>
      </Row>
      <Row>
        {collection.map((item, idx) => (
          <Col
            sm={6}
            lg={4}
            xl={3}
            md={6}
            key={idx}
            className="d-flex justify-content-center"
          >
            <Image src={item.imageUrl} alt={item.name} height={200} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Collection;
