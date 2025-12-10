import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Dashboard from './pages/Dashboard.jsx'
import CRM from './pages/CRM.jsx'
import Manufacturing from './pages/Manufacturing.jsx'
import Inventory from './pages/Inventory.jsx'
import Project from './pages/Project.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'crm', element: <CRM /> },
      { path: 'manufacturing', element: <Manufacturing /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'project', element: <Project /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
