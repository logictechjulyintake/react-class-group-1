import './App.css'
import Button from './Button';
import MapOrLoop from './MapOrLoop';
import UseStateHookEg from './UseStateHookEg';
import Input from './Input';
import MyForm from './MyForm';

function App() {
  return <>

    <h5>button component example</h5>
    <Button text="Login" test="ok" alert="You are logged in!" />
    <Button text="Register" alert="You are registered!" />

    <h5>lopping or mapping through array of products</h5>
    <MapOrLoop />

    <h5>Use state example with counter</h5>
    <UseStateHookEg />

    <h5>Input and useState</h5>
    <Input />

    <h5>Form</h5>
    <MyForm />

  </>
}

export default App;
