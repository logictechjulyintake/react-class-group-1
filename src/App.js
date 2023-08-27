import './App.css'
import Button from './components/Button';
import MapOrLoop from './components/MapOrLoop';
import UseStateHookEg from './components/UseStateHookEg';
import Input from './components/Input';
import MyForm from './components/MyForm';
import UseRefEg from './components/UseRefEg';
import FetchAPIEg from './components/FetchAPIEg';
import APIEgTwo from './components/APIEgTwo';
import UseEffecEg from './components/UseEffecEg';

function App() {
  return <>

    <UseEffecEg />

    <h5 className='font-bold uppercase m-2'>Fetch API Example</h5>
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

export default App;
