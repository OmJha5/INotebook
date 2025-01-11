import React , {useContext , useEffect} from 'react'
import NoteContext from '../Context/Note/NoteContext'

export default function About() {
    let a = useContext(NoteContext)

    useEffect(() => {
      a.update()
    
    }, [])
    
    
  return (
    <div>
        This is About Page and my name is {a.state.name} and i am in class {a.state.class}
    </div>
  )
}
