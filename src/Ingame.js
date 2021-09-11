import { Context } from './Contexts/Context';

import { useContext } from 'react';

export function Ingame(){

    const { word, setWord } = useContext(Context);

    return (<div>
        <h1>Ingame</h1>
        <p>{word}</p>
    </div>)
}