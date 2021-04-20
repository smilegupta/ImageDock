import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import UploadImageModal from "../../Modals/UploadImage";
import { getRecentUploads } from "../../../CRUD/uploadImage.crud";
import ImageModal from "../../Modals/ImageModal";

const Upload = () => {
  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  const [apiResponse, setApiResponse] = useState();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    recentUploadsResponse();
  }, []);

  // API to fetch Recent Uploaded Images
  const recentUploadsResponse = async () => {
    const random = await getRecentUploads();
    setApiResponse(random.data);
  };

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
            Recent Uploads{" "}
            <i
              className="las la-plus cursor-pointer"
              onClick={() => setModalStatus(true)}
            />{" "}
          </h4>
        </Col>
      </Row>
      <Row>
        {apiResponse &&
          apiResponse.map((item, idx) => (
            <Col
              sm={4}
              lg={3}
              xl={3}
              md={4}
              xs={6}
              key={idx}
              className="d-flex justify-content-center p-2 mb-3"
            >
              <Image
                className="image cursor-pointer w-100"
                src={item}
                alt="Images"
                style={{ border: "2px solid #000000" }}
                onClick={() => setSelectedImage(item)}
              />
            </Col>
          ))}
      </Row>
      <UploadImageModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setApiResponse={setApiResponse}
      />
      {selectedImage && (
        <ImageModal
          selectedImg={selectedImage}
          setSelectedImg={setSelectedImage}
        />
      )}
    </div>
  );
};

export default Upload;
