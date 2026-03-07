import { Routes } from "react-router"
import { Route } from "react-router"
import { UsersPage } from "./pages/usersPage/UsersPage"



function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<UsersPage/>}/>
      </Routes>
    </div>
  )
}

export default App