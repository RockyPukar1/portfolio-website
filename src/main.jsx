import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './ErrorFallBack/'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
)
