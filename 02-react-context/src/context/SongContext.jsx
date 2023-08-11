import { createContext, useState, useEffect } from 'react'
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

// Paso 1. Crear el contexto
const SongContext = createContext()

// Paso 2. Crear el provedor del contexto
// El proveedor maneja de donde se obtiene la informacion y como se comparte.
// El proveedor es un COMPONENTE envuelve a los compoente que va a usar el contexto.
function SongProvider ({ children }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setselectedSong] = useState({})

  // Simular una llamada a la API con la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Crear un objeto con la información que va a tener el contexto
  const data = {
    list,
    loading,
    selectedSong,
    setselectedSong
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

// Exportar las funcinoes para que puedan accederse
export {
  SongContext,
  SongProvider
}

/* Uso de CONTEXT */

// Paso 4. Ahora debo ir a un componente de orden superior (Home.jsx) y envolverlo con el proveedor del contexto con la etiqueta <SongProvider> </SongProvider>
