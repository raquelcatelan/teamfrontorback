import './App.scss';
import WhiteBoard from './componentes/WhiteBoard'
import Gender from './componentes/Gender'
import BirthDate from './componentes/BirthDate'

function App() {
  return (

    <div className="inicial-page">
      <WhiteBoard />
      <Gender />
      <BirthDate />
    </div>
  );
}

export default App;
