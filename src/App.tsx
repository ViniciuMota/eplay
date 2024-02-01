import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="grey" />
        <ProductList title="Em preve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
