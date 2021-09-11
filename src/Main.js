import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";

export function Main(){

    const history = useHistory();

    return (<div id="Main">
        <h1>Hangman</h1>
        <Button variant="contained" color="primary" onClick={() => history.push("/settings")}>Play</Button>
    </div>)
}