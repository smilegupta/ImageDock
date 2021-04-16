import {useState} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { recentUploads } from "../../../config/dummydata";
import UploadImageModal from "../../Modals/UploadImage";

const Upload = () => {
 
  // State Variables
  const [modalStatus, setModalStatus ] = useState(false);
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
            Recent Uploads <i className="las la-plus cursor-pointer" onClick={() => setModalStatus(true)} />{" "}
          </h4>
        </Col>
      </Row>
      <Row>
        {recentUploads.map((item, idx) => (
          <Col
            sm={4}
            lg={2}
            xl={2}
            md={3}
            xs={6}
            key={idx}
            className="d-flex justify-content-center mb-2"
          >
            <Image
              className="image cursor-pointer w-100"
              src={item}
              alt="Images"
              style={{ border: "2px solid #000000" }}
            />
          </Col>
        ))}
      </Row>
      <Row className="my-4">
        <Col className="text-center cursor-pointer">
          <h5>
            {" "}
            Load More <i className="las la-chevron-circle-down" />{" "}
          </h5>
        </Col>
      </Row>
      <UploadImageModal modalStatus={modalStatus}  setModalStatus={setModalStatus} /> 
    </div>
  );
};

export default Upload;
