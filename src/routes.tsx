
import { Route, Routes } from 'react-router-dom'
import Place from './pages/place'
import City from './pages/city'
import App from './App'

export default function MainRouter() {
      
  return (
    
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/country/:id" element={<Place />}/>
            <Route path="/city/:id" element={<City />}/> 
        </Routes>
    
  )
}
