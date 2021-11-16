import React, {useState} from 'react'

export const Counter = () => {
    /*
     *  const usersList = ['Marcos', 'Diego', 'Mayk'];
     *  usersList.push('Dani'); (X)
     *  userList = [...usersList, 'Dani']; (✓)
    */
    

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(current => current += 1)
    return (
        <div>
            <h2>{ counter }</h2>
            <button type="button" onClick={()=> increment()}>
                Increase
            </button>
        </div>
    )
}
