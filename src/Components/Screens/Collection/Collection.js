/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { getCollection } from '../../../CRUD/collections.crud'
import EditSettings from "../../Modals/EditCollection";
import addImage from "../../../Images/addImage.svg";
import UploadImageModal from '../../Modals/UploadImageCollection'


const Collection = ({ match }) => {
  // State Variables
  const [modalStatus, setModalStatus] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [collection, setCollection] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getCollectionResponse();
  }, []);

  const getCollectionResponse = async () => {

    const res = await getCollection(match.params.id);
    console.log(res.data)
    setCollection(res.data)
    setLoading(false)
  };

  return (
    <div>
      <Row className="mb-3">
        <Col className="text-right">
          <Link to="/home">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
      {
        loading === true ? (<> I am loading </>) : (
          <>
            <Row className="mb-2">
              <Col className="text-lg-left text-center">
                <h4>
                  {" "}
                  {collection[0].collectionName}{" "}
                  {/* <i
                    className="las la-cog cursor-pointer"
                    onClick={() => setSettingsOpen(true)}
                  />{" "} */}
                </h4>
                <p className="text-muted">{collection[0].collectionDescription}</p>
              </Col>
            </Row>
            <Row>
              {collection.map((item, idx) => (
                <>
                  {item.imageUrl && <Col
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
                      style={{ border: "2px solid #000000" }}
                    />
                  </Col>}
                </>

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
                  onClick={() => setModalStatus(true)}
                />
              </Col>
            </Row>
            <EditSettings
              settingsOpen={settingsOpen}
              setSettingsOpen={setSettingsOpen}
              name={collection[0].collectionName}
              desc={collection[0].collectionDescription}
            />
            <UploadImageModal modalStatus={modalStatus}  setModalStatus={setModalStatus} setApiResponse={setCollection} defaultData={collection[0]} /> 
          </>
        )
      }
    </div>
  );
};

export default Collection;
