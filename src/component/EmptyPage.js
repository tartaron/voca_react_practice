import {Link} from "react-router-dom";

export default function EmptyPage() {
    return (
        <div>
            <h2>
                Wrong Page !!
            </h2>
            <Link to={"/"}>돌아가기</Link>
        </div>
    );
}