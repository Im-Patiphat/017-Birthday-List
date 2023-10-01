import { useState } from 'react'
import './App.css'
import List from './List';
import data from './data';
function App() {
  const [people , setPeople] = useState(data);
  const clearAll = () =>{
    setPeople([]);
  }
  return (
    <>
      <h1>Workshop 1 : Birthday List Project</h1>
      <h2>017 Patiphat Rattanosot</h2>
      <main>
        <section className="container">
          <h3>5 Birthdays today</h3>
          <List people = {people}/>
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </>
  )
}

export default App
