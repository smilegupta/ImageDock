import { createRef, Fragment } from 'react'
import { exportComponentAsPNG } from "react-component-export-image";

const ImageMaker = ({ children }) => {
    const componentRef = createRef();

    return (
        <Fragment>
            <h5> Preview <i className="las la-download cursor-pointer" style={{ fontSize: "18px" }} onClick={() => exportComponentAsPNG(componentRef)} /> </h5>
            <div ref={componentRef}>{children}</div>
        </Fragment>
    )
}

export default ImageMaker