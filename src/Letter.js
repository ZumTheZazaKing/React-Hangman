export function Letter(props){
    return (<span onClick={e => props.chooseLetter(e)} className="letter">
        {props.letter}
    </span>)
}