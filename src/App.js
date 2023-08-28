import './App.css'
import AllEg from './components/AllEg';

import BannerImg from "./img/banner.png";

function App() {
  return <>

    <div className="bg-slate-100 p-10">
      <h2 className="font-bold uppercase">Logic Tech Nepal</h2>
      <img src={BannerImg} className="bg-slate-300 p-5 mt-2 mb-2 rounded shadow-lg w-screen" />

      <a href="https://logictechnepal.com" className="inline-block bg-slate-600 p-2 text-white font-bold hover:bg-slate-700">Visit Website &rarr;</a>
    </div>

    {/* <AllEg /> */}
  </>
}

export default App;
