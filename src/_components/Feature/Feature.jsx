import React, {useEffect, useState} from 'react';



const Feature = ({feature}) => {

    const [counter, setCounter] = useState(10);
    const [add, setAdd] = useState(10);

    const countdown = () => setCounter(counter + 1);
    const addUp = () => setAdd(add + 10)
    const checkIsOver = () => {
        if(counter === 20) {
            setCounter(10);
        }
    };

    useEffect(() => {
        console.log("useEffect componentDidMount or update");
        const id = setInterval(countdown, 1000);

        // cleaning
        return () => {
             checkIsOver(counter)
             clearTimeout(id)
        }
    },[counter]);

    useEffect(() => {
        console.log("Use effect for add")
    },[add]);

    return(
        <div>
            <div onClick={countdown}>
                <p>This is props - feature:  {feature} inside functional component</p>
                <p>Counter equals: {counter} </p>
            </div>
            <div onClick={addUp}>
                <p>Click here</p>
                <p>{add}</p>
            </div>
        </div>


    )
};


export default Feature;