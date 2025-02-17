import '~/assets/App.css'
import RouterProvider from './routers/RouterProvider'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/">
      <RouterProvider />
    </BrowserRouter>
  )
}
export default App
