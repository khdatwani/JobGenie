
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from "./layouts/app-layout"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
import SavedJobs from './pages/saved-job'
import JobPage from './pages/job'
import JobListing from './pages/job-listing'
import PostJobs from './pages/post-job'
import MyJobs from './pages/my-job'
import { ThemeProvider } from './components/ui/theme-provider'

 const router=createBrowserRouter([
  {
    element:<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<LandingPage />
      },
      {
        path:"/onboarding",
        element:<Onboarding />
      },
      {
        path:"/saved-jobs",
        element:<SavedJobs />
      },
      {
        path:"/job/:id",
        element:<JobPage />
      },
      {
        path:"/jobs",
        element:<JobListing />
      },
      {
        path:"/post-jobs",
        element:<PostJobs />
      },
      {
        path:"my-jobs",
        element:<MyJobs />
      }
    ]
  }
 ])
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
    
  )
}

export default App
