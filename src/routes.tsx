
import { Route, Routes } from 'react-router-dom'
import Place from './pages/place'
import App from './App'

export default function MainRouter() {
      
  return (
    
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/link/:id" element={<Place />}/>
        </Routes>
    
  )
}
