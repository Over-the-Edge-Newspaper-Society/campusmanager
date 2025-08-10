import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Use dev version with sample data in development mode
const AppComponent = import.meta.env.DEV 
  ? React.lazy(() => import('./App.dev.jsx'))
  : React.lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppComponent />
    </React.Suspense>
  </React.StrictMode>,
)