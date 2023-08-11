// CUSTOM HOOKS
// Empieza con la palabra use
// Son funciones
// Deben usar otros hooks de React
import { useContext } from 'react'
import { SongContext } from '@/context/SongContext'

// Paso 3. Crear un custom hook para usar el contexto
export const useSongContext = () => {
  const context = useContext(SongContext)

  if (!context) {
    throw new Error('useSongContext debe de usarse dentro de SongProvider')
  }

  return context
}
