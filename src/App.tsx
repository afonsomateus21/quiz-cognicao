import { Outlet } from "react-router-dom"

function App() {

  return (
    <main className="bg-orange-600 h-screen flex flex-col justify-center">
      <Outlet />
    </main>
  )
}

export default App
