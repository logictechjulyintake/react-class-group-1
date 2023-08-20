import './App.css'
import Button from './Button';
import MapOrLoop from './MapOrLoop';
import UseStateHookEg from './UseStateHookEg';

function App() {
  return <>

    <h5>button component example</h5>
    <Button />

    <h5>lopping or mapping through array of products</h5>
    <MapOrLoop />

    <h5>Use state example with counter</h5>
    <UseStateHookEg />
  </>
}

export default App;
