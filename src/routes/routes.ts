import Error404 from "../screens/pages/Page404";
import Home from "../screens/Home";
import Login from "../screens/Login";

interface IRoutes {
  path: string
  name: string
  component: React.FC
  exact?: boolean
}

const routes: IRoutes[] = [
  {
    path: '/',
		name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
		name: 'Login',
    component: Login,
  },

  //Pages
  {
    path: '*',
		name: 'Error404',
    component: Error404,
  },
]

export default routes;