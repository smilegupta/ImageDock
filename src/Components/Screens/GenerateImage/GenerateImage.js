import React from 'react'
import ConfigCover from './ConfigCover'
import {Row, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

const GenerateImage = () => {
    return (
        <>
        <Row className="mb-3">
        <Col className="text-right">
          <Link to="/">
            <i className="las la-arrow-left" /> Go Back
          </Link>
        </Col>
      </Row>
       <ConfigCover />
       </>
    )
}

export default GenerateImage
