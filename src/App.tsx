import { Route, RouteProps, Routes } from "react-router-dom"
import MainHeader from "./components/layout/MainHeader"
import { routes } from "./routes"

function App() {
  const allRoutes = routes.map((routeItem: RouteProps, routeIndex: number) => {
    return <Route key={routeIndex} path={routeItem.path} element={routeItem.element}></Route>
  })

  return (
    <>
      <MainHeader />
      <div className="main-container">
        <Routes>
          {allRoutes}
        </Routes>
      </div>
    </>
  )
}

export default App
