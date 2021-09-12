import { Context } from './Contexts/Context';
import { Letter } from './Letter';

import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';

export function Ingame(){

    const history = useHistory();

    const { word, wordHint, lives, setLives } = useContext(Context);

    useEffect(() => {
        if(!word)history.push("/");
    })

    const [hiddenWord, setHiddenWord] = useState(word.replace(/\w/g, "_"));
    const [open, setOpen] = useState(false);
    const [chosenLetters, setChosenLetters] = useState([]);

    const handleClose = () => setOpen(false);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function chooseLetter(e){
        if(word.includes(e.target.innerHTML)){
            if(chosenLetters.includes(e.target.innerHTML)){
                setOpen(true);
            } else {
                console.log(e.target.innerHTML);
                setChosenLetters([...chosenLetters, e.target.innerHTML]);
                revealWord(e.target.innerHTML);
            }
        }
    }

    function revealWord(letter){
        const tempHiddenWord = [...hiddenWord];
        for(var i = 0; i < word.length; i++){
            if(word.charAt(i) === letter)tempHiddenWord[i] = letter;
        }
        setHiddenWord(tempHiddenWord);
    }

    return (<div id="ingame">
        <p id="hiddenWord">{hiddenWord}</p>
        <p id="wordHint">{wordHint}</p>

        <div id="letters">
            {alphabet && alphabet.split("").map(letter => <Letter chooseLetter={chooseLetter} letter={letter}>{letter}</Letter>)}
            <p>Lives: {lives}</p>
        </div>
        <Snackbar message="Letter already used" open={open} autoHideDuration={2000} onClose={handleClose}/>
    </div>)
}