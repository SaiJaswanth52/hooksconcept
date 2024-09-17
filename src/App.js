import './App.css';
import ClassCounter from './components/ClassCounter';
import CompA from './components/CompA';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import FormEx from './components/FormEx';
import GetData from './components/GetData';
import HookCounter from './components/HookCounter';
import UseEffectEx from './components/UseEffectEx';
import UseEffectMouse from './components/UseEffectMouse';
import UseReduceEx from './components/UseReduceEx';
import UseReduceExObj from './components/UseReduceExObj';
import UseReduceFetch from './components/UseReduceFetch';
import UseStateArrays from './components/UseStateArrays';
import UseStateObjects from './components/UseStateObjects';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <UseStateObjects/>
      <UseStateArrays/>
      <UseEffectEx/>
      <UseEffectMouse/>
      <GetData/>
      <CompA/>
      <UseReduceExObj/>
      <UseReduceFetch/>
      <DocTitleOne/>
      <DocTitleTwo/>
      <FormEx/>
    </div>
  );
}

export default App;
