import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import TicketPage from './Pages/TicketPage'
import Nav from './Components/Nav'
function App() {
 

  return (
    <>
      <div className='app'>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/TicketPage' element={<TicketPage />}/>
              <Route path='/TicketPage/ :id' element={<TicketPage editMode = {true}/>}/> 
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
