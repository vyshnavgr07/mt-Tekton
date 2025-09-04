import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Toy from "./pages/products/Toy"



function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="/toy" element={<Toy/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
