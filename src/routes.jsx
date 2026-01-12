import Dashboard from "./pages/Dashboard"
import ProfilePage from "./pages/progilepage/ProfilePage"
import UsersPage from "./pages/Users/UsersPage"

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "Users",
    path: "/users",
    element: <UsersPage />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <ProfilePage />,
  },
]
