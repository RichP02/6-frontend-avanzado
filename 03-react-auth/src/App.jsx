import './App.css'
import { Home, Dashborad, Login, SingUp, Secret } from '@/pages'
import Header from './components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <h1>React App</h1>
      <Home />
      <Dashborad />
      <Login />
      <SingUp />
      <Secret />
    </>
  )
}

export default App
