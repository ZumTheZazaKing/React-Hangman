import { useContext } from 'react';
import { Context } from './Contexts/Context';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export function Settings(){

    const { difficulty } = useContext(Context);

    const history = useHistory();

    return (<div>
        <h1>Settings</h1>
        <h2>Difficulty</h2>
        <p>{difficulty}</p>
        <Button variant="contained" color="primary" onClick={() => history.push("/ingame")}>START</Button>
    </div>)
}