import {useRef, useState} from "react";
import useFetch from "../hook/useFetch";
import {useNavigate} from "react-router-dom";

export default function CreateWord() {
    const days = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();
    const [isLoaded, setisLoaded] = useState(false);

    const korRef = useRef(null);
    const engRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className={"input_area"}>
                <label>Eng</label>
                <input type={"text"} placeholder={"English word plz"} ref={engRef}/>
            </div>
            <div className={"input_area"}>
                <label>Kor</label>
                <input type={"text"} placeholder={"한글 부탁"} ref={korRef}/>
            </div>
            <div className={"input_area"}>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                        ))}
                </select>
            </div>
            <div>
                <button>
                    단어생성
                </button>
            </div>
        </form>
    );
};