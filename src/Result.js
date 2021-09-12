import { Context } from './Contexts/Context';

import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export function Result(){

    let { result, word, setWord, setWordHint, setLives, setResult } = useContext(Context);

    const history = useHistory();

    useEffect(() => {
        if(!word)history.push("/");
    })

    const resetValues = () => {
        setWord("");
        setWordHint("");
        setLives(5);
        setResult("");
        history.push("/");
    }


    return (<div id="result">
        <h2>{result}</h2>
        <p>The word was <b>{word}</b></p>
        <Button variant="contained" color="primary" onClick={() => resetValues()}>RETURN</Button>
    </div>)
}