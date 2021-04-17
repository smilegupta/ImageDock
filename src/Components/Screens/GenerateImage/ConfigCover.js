import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CoverImage from './CoverImage'
import ImageMaker from './ImageMaker'
import { patternsOptions, randomPatternGenerator , randomThemeGenerator} from './helpers'

const ConfigCover = () => {
    //Defaults
    const defaultTitle = "The Fastest Way To Replace All Occurrences Of A String In JavaScript"
    const defaultSize = "32"
    const defaultPattern = ""
    const defaultColor = "#ffffff"
    const defaultBgColor = "#232F3E"

    // State Variables
    const [title, setTitle] = useState(defaultTitle)
    const [textSize, setTextSize] = useState(defaultSize)
    const [pattern, setPattern] = useState(defaultPattern)
    const [textColor, setTextColor] = useState(defaultColor)
    const [bgColor, setBgColor] = useState(defaultBgColor)

    // Reset Function
    const handleReset = () => {
        setTitle(defaultTitle)
        setBgColor(defaultBgColor)
        setTextColor(defaultColor)
        setPattern(defaultPattern)
        setTextSize(defaultSize)
    };

    // Random Choice Generator Function
    const randomChoice = () => {
        setPattern(randomPatternGenerator())
        const theme = randomThemeGenerator()
        setTextColor(theme.textColor)
        setBgColor(theme.bgColor)
    };

    return (
        <Row className="my-3">
            <Col sm={12} lg={4} xl={4} md={4} xs={12}>
                <h5> Cover Image Details <i className="las la-random cursor-pointer" style={{ fontSize: "18px" }} onClick={() => randomChoice()}></i> <i className="las la-redo-alt cursor-pointer" style={{ fontSize: "18px" }} onClick={() => handleReset()}></i></h5>
                <div className="form-group">
                    <label>Blog Title</label>
                    <input
                        type="text"
                        placeholder="Enter Blog Title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Background Color &nbsp; </label>
                    <input
                        type="color"
                        className="form-control"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Text Color &nbsp; </label>
                    <input
                        type="color"
                        className="form-control"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Font Size </label>
                    <input
                        type="number"
                        max="50"
                        className="form-control"
                        value={textSize}
                        onChange={(e) => setTextSize(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label> Pattern </label>
                    <select className="form-control" value={pattern} onChange={(e) => setPattern(e.target.value)}>
                        {patternsOptions.map((option, index) =>
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        )}
                    </select>
                </div>

            </Col>
            <Col sm={12} lg={8} xl={8} md={8} xs={12}>
                <ImageMaker>
                    <CoverImage pattern={pattern} textSize={textSize} textColor={textColor} title={title}  bgColor={bgColor} />
                </ImageMaker>
                
            </Col>
        </Row>
    )
}

export default ConfigCover
