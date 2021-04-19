import { Row, Col, Image, Button } from "react-bootstrap";
import HomeScreenImage from "../../../Images/homescreen.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Row>
      <Col className="text-center mt-3">
        {" "}
        <Image src={HomeScreenImage} alt="empty" className="w-50" />
        <h3 className="w-100 mt-md-4 mt-2">Welcome to Image Dock</h3>
        <br />
        <h6 className="w-100 mt-2 text-muted">
          Get Publicly Sharable Image URL
        </h6>
        <h6 className="w-100 mt-2 text-muted">
          Auto Generate Cover Images For Blogs
        </h6>
        <h6 className="w-100 mt-2 text-muted">
          Auto Generate I-Frames for Albums Created
        </h6>
        <Link to="/upload">
          <Button className="btn btn-dark  mt-2 ml-2 p-3">Upload Image </Button>
        </Link>
        <Link to="/generate-image">
          <Button className="btn btn-dark mt-2 ml-2 p-3">
            {" "}
            Generate Cover Image{" "}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Welcome;
