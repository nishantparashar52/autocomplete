import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import Input from './components/Input'
import Suggestions from './components/Suggestions'
import Logger from './components/logger'
import { data } from './mockData/data';
import ListPage from './components/ListPage'


import FileStructure from './FileStructure'
// import C from './hooks/useCache'
function App() {

  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [value, setInputvalue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const ref = useRef()

  async function fetchApi(value) {
    try {
      setLoading(true)
      ref.current = value
      setInputValue(value)
      // if(!C.get(value)) {
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
        response.json().then(val => {
          setLoading(false)
          // C.set('value', val.recipes);
          setResponse(val?.recipes)
          
        })
        // } else setResponse(C.get(value))
      } catch(e) {
        setError(e)
        return new Error(e)
      }
  }

  const handleSuggestionClick = (value) => {
    setInputValue(value)
    setResponse([])
  }
  return (
    <div className="App">
      <h1>Autocomplete</h1>
      <Input
      placeholder="Start typing"
      onSubmit={() => {}}
      onChange={(e) => {
        fetchApi(e)
      }}
      defaultValue={inputValue  }
      />
      {response.length > 0 && <Suggestions
        response={response}
        dataKey="name"
        onSuggestionClick={handleSuggestionClick}
        selected={ref.current}
      />}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}  
      <FileStructure data={data} />
      <ListPage />
      <Logger />
    </div>
  );
}

export default App;
