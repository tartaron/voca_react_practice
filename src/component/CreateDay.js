import useFetch from "../hook/useFetch";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";

export default function CreateDay() {
    // days 받아와서 현재 일수 계산
    const days = useFetch(`http://localhost:3001/days`)
    const navigate = useNavigate();

    // 계산된 일 수 반영하기
    function addDay() {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1,
            })
        }).then((response) => {
            if (response.ok) {
                alert("A day is added");
                navigate("/");
            }
        });
    }

    return (
        <div>
            <h2> current num of days: {days.length}</h2>
            <button onClick={addDay}>create additional day</button>
        </div>
    );
};