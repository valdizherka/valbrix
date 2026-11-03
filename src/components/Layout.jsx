import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import usePageMeta from '../seo/usePageMeta'

export default function Layout() {
  const { pathname } = useLocation()
  usePageMeta(pathname.replace(/\/+$/, '') || '/')

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
