import './App.css';
import Body from './Components/Body';

function App() {

  document.body.style.background =`linear-gradient(90deg, rgba(142,148,163,0.6923144257703081) 0%, rgba(109,115,126,0.5242471988795518) 14%, rgba(72,78,80,0.7343312324929971) 37%, rgba(55,68,74,1) 59%, rgba(101,107,110,0.5326505602240896) 81%, rgba(160,168,173,0.6194852941176471) 100%)`
  return (
    <div className="App">
      <Body/>
    </div>
  );
}

export default App;
