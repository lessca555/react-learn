import './App.css';
import Nav from './compo/nav'


function App() {
  return (
    <div>
      <Nav/>
      <h1>Test</h1>
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <h1>Card header</h1>
          </div>
          <div className='card-body'>
            <h5>Card body</h5>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
