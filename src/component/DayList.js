import useFetch from "../hook/useFetch";
import {Link} from "react-router-dom";

export default function DayList() {
    const dayList = useFetch(`http://localhost:3001/days`);

    return (
        <div>
            <ul className={"list_day"}>
                {dayList.map((day) => (
                    <li key={day.id}>
                        <Link to={`day/${day.day}`}> Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}