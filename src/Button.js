// example button click
function Button() {

    function clickMe() {
        alert("You clicked me!")
    }

    return( 
        <button onClick={clickMe}>Click me</button>
    )
}

export default Button