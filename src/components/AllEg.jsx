import APIEgTwo from "./APIEgTwo"
import Button from "./Button"
import FetchAPIEg from "./FetchAPIEg"
import Input from "./Input"
import MapOrLoop from "./MapOrLoop"
import MyForm from "./MyForm"
import UseEffecEg from "./UseEffecEg"
import UseRefEg from "./UseRefEg"
import UseStateHookEg from "./UseStateHookEg"

function AllEg() {
    return <>
        <UseEffecEg />

        <h5 className="font-bold uppercase m-2">Fetch API Example</h5>
        <FetchAPIEg />
        <APIEgTwo />

        <hr />

        <h5 className='font-bold uppercase m-2'>Input Ref Example</h5>
        <UseRefEg />

        <hr />

        <h5 className='font-bold uppercase m-2'>button component example</h5>
        <Button text="Login" test="ok" alert="You are logged in!" />
        <Button text="Register" alert="You are registered!" />
        <hr />

        <h5 className='font-bold uppercase m-2'>lopping or mapping through array of products</h5>
        <MapOrLoop />
        <hr />

        <h5 className='font-bold uppercase m-2'>Use state example with counter</h5>
        <UseStateHookEg />
        <hr />

        <h5 className='font-bold uppercase m-2'>Input and useState</h5>
        <Input />
        <hr />

        <h5 className='font-bold uppercase m-2'>Form</h5>
        <MyForm />
    </>
}

export default AllEg