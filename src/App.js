import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  const removeFunc=(id)=>{
    let newppl=people.filter((person)=>
        person.id !== id);
        setPeople(newppl);
    }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
        return (
          <List person={person} removeFunc={removeFunc}/>
        );
      })}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}
export default App;