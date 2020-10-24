// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React, {useState, useEffect} from 'react'

const useLocalStorageState = (localStorageKey, initialValue = '') => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(localStorageKey) || initialValue,
  )
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, state)
  }, [localStorageKey, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    const {value} = event.target
    setName(value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} value={name} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
