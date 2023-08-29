import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FetchAPIEg from './components/FetchAPIEg';
import MyForm from './components/MyForm';
import Banner from './components/Banner';
import Home from './components/Home';
import APIEgTwo from './components/APIEgTwo';
import Input from './components/Input';
import MapOrLoop from './components/MapOrLoop';
import UseRefEg from './components/UseRefEg';
import UseEffecEg from './components/UseEffecEg';


function App() {
  return <>
    {/* <AllEg /> */}

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/apieg" element={<FetchAPIEg />} />
        <Route path="/apiegtwo" element={<APIEgTwo />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/input" element={<Input />} />
        <Route path="/map" element={<MapOrLoop />} />
        <Route path="/useref" element={<UseRefEg />} />
        <Route path="/useeffecteg" element={<UseEffecEg />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
