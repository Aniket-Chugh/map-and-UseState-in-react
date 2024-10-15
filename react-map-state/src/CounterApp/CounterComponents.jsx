import { useState } from "react";

function CounterApp() {
    const [isValue, setIsValue] = useState(0);

    return (
        <div>
            <p>{isValue}</p>

            <button
                onClick={() => {
                    setIsValue((prevValue) => {
                        if (prevValue === 10) {
                            alert("You have reached the max value :(");
                            return prevValue; // Prevent updating beyond 10
                        }
                        return prevValue + 1;
                    });
                }}
            >
                Make it More
            </button>
        </div>
    );
}

export default CounterApp;
