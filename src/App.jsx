import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css" //Boostrap attachment
import Cards from './components/Cards' //arrow function component
import { Navbar } from './components/Navbar' //destructured component

function App() {
  return (
    <>
      <Navbar />
      <Cards />
    </>
  )
}

export default App
