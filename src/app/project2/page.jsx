import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card'
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return(
      <Card 
        key={item.title}
        {...item}
        />
    )
  })
  
  return(
  <div>
    
    <Header />
    {cards}
  </div>
  )
}

export default App
