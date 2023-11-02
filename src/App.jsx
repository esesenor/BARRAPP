import { useState } from 'react'
import './App.css'
import quotes from "./db/quotes.json"
import imgBg from "./db/imgBg.json"
import {getRandomElement} from "./utils/random"
import QuotesCard from "./components/QuotesCard"

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(imgBg))

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(imgBg))
  }

  return (
    <main className={`App ${currentBg}`}>
      <QuotesCard 
            quote={quote} 
            handleChangeQuote={handleChangeQuote}
            />
    </main>
  )
}

export default App