import { Row, Col, Image, Button } from "react-bootstrap";
import HomeScreenImage from "../../../Images/homescreen.svg";

const HomeScreen2 = () => {
  return (
    <Row style={{ minHeight: "70vh" }}>
      <Col className="text-center my-4">
        {" "}
        <Image src={HomeScreenImage} alt="empty" className="w-50" />
        <h3 className="w-100 mt-md-4 mt-2">Welcome to Image Dock</h3>
        <h5 className="w-100 mt-2">
          {" "}
          Below is the list of servies we provide:
        </h5>
        <h6 className="w-100 mt-2 text-muted">
          A place to Upload Image to secure S3 Buckets
        </h6>
        <h6 className="w-100 mt-2 text-muted">
          A place to generate cover images for blogs
        </h6>
        <h6 className="w-100 mt-2 text-muted">
          A place to edit image just like photoshop
        </h6>
        <Button className="btn btn-dark  mt-3 ml-2 p-2">
          {" "}
          &nbsp; Upload Image{" "}
          <i className="las la-cloud-upload-alt" style={{ fontSize: "18px" }} />
        </Button>
        <Button className="btn btn-dark   mt-3 ml-2 p-2">
          {" "}
          &nbsp; Edit Image{" "}
          <i className="las la-pen" style={{ fontSize: "18px" }} />
        </Button>
        <Button className="btn btn-dark mt-3 ml-2 p-2">
          {" "}
          &nbsp; Generate Image{" "}
          <i className="las la-plus" style={{ fontSize: "18px" }} />
        </Button>{" "}
      </Col>
    </Row>
  );
};

export default HomeScreen2;
