import { useState } from "react";

function MapWithUseState() {
    const [List, setList] = useState(["Monday", "tuesDay", "wednesday", "thrusday"]);
    return (
        <div>
            <div>

                { List.map((elem) => {
                    return <p>{elem}</p>
                })}


            </div>
            <button onClick={
                () => {
                    setList([...List, "friday"]);
                }
            }>add Task</button>
        </div>
    );
}

export default MapWithUseState;
