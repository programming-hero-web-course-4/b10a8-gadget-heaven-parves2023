import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
const MainLayout = () => {
  return (
    <div>
      <Toaster />

        <Navbar />

        <Outlet />
        
      <Footer />
    </div>
  )
}

export default MainLayout
