import React from 'react';
const List = ({ person,removeFunc}) => {
  return (
    <>
          <article key={person.id} className='person'>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
             <button onClick={()=>{removeFunc(person.id)}}>remove</button>
            </div>
          </article>
    </>
  );
};
export default List;
