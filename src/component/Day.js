import {useParams} from "react-router-dom";
import useFetch from "../hook/useFetch";
import Word from "./Word";

export default function Day() {
    const {day} = useParams();

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day} </h2>
            {/*{words.length === 0 && <span>Loading !!!</span>}*/}
            <table>
                <tbody>
                {words.map((word) => {
                    return <Word word={word} key={word.id}/>;
                })}
                </tbody>
            </table>
        </>
    );
}