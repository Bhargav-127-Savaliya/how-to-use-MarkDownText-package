import './App.css';
import data from '../src/utils/data.json'
import MarkDownText from 'markdown-text'

function App() {
  return (
    <div className="App">
      {data?.data?.map((i , index)=>{
        return (
          <div key={index}>
            <h1>{i.title}</h1>
            <MarkDownText data={i.type} bold={true} italic={true} underline={true} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
