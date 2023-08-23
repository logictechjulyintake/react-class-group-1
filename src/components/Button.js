// example button click
function Button(props) {

    function clickMe() {
        alert(props.alert)
    }

    return (
        <>
            <button {...props} >{props.text}</button>
            {props.test}
        </>
    )
}

export default Button