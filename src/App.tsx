import { Routes } from "react-router"
import { Route } from "react-router"
import { UsersPage } from "./pages/usersPage/UsersPage"
import { UserDetailsPage } from "./pages/userDetails/userDetailsPage"



function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<UsersPage/>}/>
        <Route path="/users/:id" element={<UserDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App