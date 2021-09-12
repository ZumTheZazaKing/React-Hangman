import { Context } from './Contexts/Context';
import { Letter } from './Letter';

import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';

export function Ingame(){

    const history = useHistory();

    let { word, wordHint, lives, setLives, setResult } = useContext(Context);

    useEffect(() => {
        if(!word)history.push("/");
    })

    const [hiddenWord, setHiddenWord] = useState(word.replace(/\w/g, "_"));
    const [open, setOpen] = useState(false);
    const [chosenLetters, setChosenLetters] = useState([]);

    const handleClose = () => setOpen(false);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function chooseLetter(e){
        if(chosenLetters.includes(e.target.innerHTML))return setOpen(true);
        setChosenLetters([...chosenLetters, e.target.innerHTML]);

        if(word.includes(e.target.innerHTML)){
            revealWord(e.target.innerHTML);
        } else {
            takeAwayLife()
        }
    }

    function revealWord(letter){
        const tempHiddenWord = [...hiddenWord];
        for(var i = 0; i < word.length; i++){
            if(word.charAt(i) === letter)tempHiddenWord[i] = letter;
        }
        setHiddenWord(tempHiddenWord);
    }

    function takeAwayLife(){
        setLives(lives - 1)
    }

    const detectResult = setInterval(() => {
        if(!hiddenWord.includes("_")){
            setResult("YOU WIN!!!");
            history.push("/end");
            clearInterval(detectResult);
        }
        if(lives === 0){
            setResult("GAME OVER");
            history.push("/end");
            clearInterval(detectResult);
        }
    },100);

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