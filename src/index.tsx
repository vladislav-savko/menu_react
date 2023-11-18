import ReactDOM from 'react-dom/client'
import './tailwind.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Routers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
)
