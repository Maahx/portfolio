import { Link } from "react-router-dom";    
import "./links.css";

function links () {
    return(
        <>
        {/* <Link to="/">home</Link>
        {/* <Link to="/messages">message</Link>
        <br></br>
        <Link to="/test">test</Link> */}
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/">app</Link></li>
        </ul>
        </>
    )
}

export default links;