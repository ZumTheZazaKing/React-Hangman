import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';

import { Context } from './Contexts/Context';

export function Main(){

    const history = useHistory();
    const { setWord, setWordHint } = useContext(Context);

    function generateWord(){

        fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(res => res.json())
        .then(data => {
            setWord(data[0]);
            console.log(data[0]);
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data[0]}`)
            .then(res => res.json())
            .then(dataset => {
                setWordHint(dataset[0].meanings[0].definitions[0].definition);
                history.push("/ingame")
            })
            .catch(()=> generateWord())
        });

    }

    return (<div id="Main">
        <h1>Hangman</h1>
        <Button variant="contained" color="primary" onClick={() => generateWord()}>Play</Button>
    </div>)
}