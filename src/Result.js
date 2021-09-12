import { Context } from './Contexts/Context';

import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Result(){

    let { result, word } = useContext(Context);

    useEffect(() => {
        if(!word)history.push("/");
    })

    const history = useHistory();

    return (<div>
        <h2>{result}</h2>
        <p>The word was <b>{word}</b></p>
    </div>)
}