import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <h1>Homepage</h1>
            <Link to={"/about"}>
                About
            </Link>
            <Link to={"/contact"}>
                Contact
            </Link>
        </div>
    )
}