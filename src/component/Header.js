import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={"header"}>
            <h1>
                <Link to={"/"}>Headerrr</Link>
            </h1>
            <div className={"menu"}>
                <Link to={"/create_word"} className={"link"}>
                    add Word
                </Link>
                <Link to={"/create_day"} className={"link"}>
                    add Day
                </Link>
            </div>
        </div>
    );
}