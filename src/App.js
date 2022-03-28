
import './App.css';
import Display from './Display';
import HomeTest from './Hometest';
import StateClassCounter from './StateClassCounter';
import StatefuctionCounter from './StateFunctionCounter';
import ClassForm from './ClassForm';

function App() {
  const name='Akondo'
  return (
   <>
    {/* <h1 className='cap'>Capello is a good boy</h1>
   <h3>My name is {name}</h3>
  <Display/>
  <hr/> */}
  <HomeTest/>
  <center>
  <h1 className='stateclass'>CLASS STATE</h1>
  <StateClassCounter/>
  <br/>
  <hr/>
  <h1 className='stateclass'> FUNCTIONAL STATE</h1>
  <StatefuctionCounter/>
  </center>
  <hr/>
  <div className='clsForm'>
  <ClassForm/>
  </div>
  </>

 
  );
}

export default App;
