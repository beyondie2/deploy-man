import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  const name = "이정환";
  return (
    <div className="App">
      <Header />
      <Body  name={name}/>
      <Footer />
    </div>
  );
}

export default App;
