import React from 'react';
import UseStateReact from './UseState';
import CounterApp from './CounterApp/CounterComponents';
import MapWithUseState from './MapwithState';

function App() {
    const list = ["monkey", "donkey", "apple", "momos", "etc"];

    return (
        <div>
            <ol type="I">
                {
                    list.map((elem, index) => {
                        const nextElem = index < list.length - 1 ? list[index + 1] : "None"; // Get the next element or "None" if at the end

                        return (
                            <li key={index}>
                                {elem}
                                <button>{nextElem}</button>
                            </li>
                        );
                    })
                }
            </ol>
            <hr></hr>
            <UseStateReact></UseStateReact>
            <hr />
            <CounterApp></CounterApp>
            <hr />
            <MapWithUseState></MapWithUseState>
        </div>
    );
}

export default App;
