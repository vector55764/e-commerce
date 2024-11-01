import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/Home.Page'
import { AboutPage } from './components/pages/AboutPage'
import { ProductsPage } from './components/pages/ProductsPage'
import { ContactUsPage } from './components/pages/ContactUsPage'
import { NavBar } from './components/molecules/NavBar'
import { UsersPage } from './components/pages/UsersPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  )
}

export default App
