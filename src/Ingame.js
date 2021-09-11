import { Context } from './Contexts/Context';
import { Letter } from './Letter';

import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Ingame(){

    const history = useHistory();

    const { word, wordHint } = useContext(Context);

    useEffect(() => {
        if(!word)history.push("/");
    })

    const [hiddenWord, setHiddenWord] = useState(word.replace(/\w/g, "_ "));

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return (<div id="ingame">
        <p id="hiddenWord">{hiddenWord}</p>
        <p id="wordHint">{wordHint}</p>

        <div id="letters">
            {alphabet && alphabet.split("").map(letter => <Letter letter={letter}>{letter}</Letter>)}
        </div>
    </div>)
}