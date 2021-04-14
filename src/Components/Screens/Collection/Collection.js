import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { collectionList } from "../../../config/dummydata";
import EditSettings from "../../Modals/EditCollection";
import addImage from "../../../Images/addImage.svg";

const Collection = ({ match }) => {
  // State Variables
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Dummy Function
  const collection = collectionList.find(
    (item) => item.collectionId === match.params.id
  ).collection;
  return (
    <div>
      <Row className="mb-3">
        <Col className="text-right">
          <Link to="/">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="text-lg-left text-center">
          <h4>
            {" "}
            {collection[0].name}{" "}
            <i
              className="las la-cog cursor-pointer"
              onClick={() => setSettingsOpen(true)}
            />{" "}
          </h4>
          <p className="text-muted">{collection[0].description}</p>
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
            className="d-flex justify-content-center mb-2"
          >
            <Image
              className="image cursor-pointer"
              src={item.imageUrl}
              alt={item.name}
              height={200}
              style={{ border: "5px solid #000000" }}
            />
          </Col>
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
          />
        </Col>
      </Row>
      <EditSettings
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        name={collection[0].name}
        desc={collection[0].description}
      />
    </div>
  );
};

export default Collection;
