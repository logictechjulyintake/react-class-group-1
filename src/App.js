import './App.css'
import Button from './components/Button';
import MapOrLoop from './components/MapOrLoop';
import UseStateHookEg from './components/UseStateHookEg';
import Input from './components/Input';
import MyForm from './components/MyForm';
import UseRefEg from './components/UseRefEg';
import FetchAPIEg from './components/FetchAPIEg';

function App() {
  return <>

    <h5>Fetch API Example</h5>
    <FetchAPIEg />

    <hr />

    <h5>Input Ref Example</h5>
    <UseRefEg />

    <hr />

    <h5>button component example</h5>
    <Button text="Login" test="ok" alert="You are logged in!" />
    <Button text="Register" alert="You are registered!" />
    <hr />

    <h5>lopping or mapping through array of products</h5>
    <MapOrLoop />
    <hr />

    <h5>Use state example with counter</h5>
    <UseStateHookEg />
    <hr />

    <h5>Input and useState</h5>
    <Input />
    <hr />

    <h5>Form</h5>
    <MyForm />

  </>
}

export default App;
