import {useState} from "react";

export default function Word(props) {
    const [word, setWord] = useState(props.word);
    const [isDone, setIsDone] = useState(word.isDone);
    const [isShow, setIsShow] = useState(false);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        // setIsDone(!isDone);
        // fetch(`http://localhost:3001/words?word=${word}`) 이거 되냐?
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            })
        }).then((response) => {
            if (response.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm("this word gonna be beleted, u sure?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then((response) => {
                    if (response.ok) {
                        setWord({id: 0});
                    }
                }
            );
        }
    }


    if (word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type={"checkbox"} checked={isDone} onChange={toggleIsDone}/>
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? "숨기기" : "보이기"}
                </button>
                <button className={"btn_del"} onClick={del}>
                    삭제
                </button>
            </td>
        </tr>
    );
};