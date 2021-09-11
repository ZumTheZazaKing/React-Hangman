import { Context } from './Contexts/Context';

import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Ingame(){

    const history = useHistory();

    const { word, wordHint } = useContext(Context);

    useEffect(() => {
        if(!word)history.push("/");
    })

    const [hiddenWord, setHiddenWord] = useState(word.replace(/\w/g, "_ "));

    return (<div id="ingame">
        <h1>Ingame</h1>
        <p>{hiddenWord}</p>
        <p>{wordHint}</p>

        <div id="letters">
            
        </div>
    </div>)
}