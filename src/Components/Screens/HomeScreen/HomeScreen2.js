import {Row, Col, Image} from 'react-bootstrap'
import HomeScreenImage from '../../../homescreen.svg'

const HomeScreen2 = () => {
    return (
        <Row style={{height: "80vh"}}>
            <Col className="d-flex" lg={6} md={6} xs={12} sm={12}>
                <Image className="w-100" src={HomeScreenImage} alt="header" />
            </Col>
            <Col className="d-flex my-auto text-right" lg={6} md={6} xs={12} sm={12}>
                <h4>
                    Welcome to Image Dock
                </h4>
            </Col>
        </Row>
    )
}

export default HomeScreen2
