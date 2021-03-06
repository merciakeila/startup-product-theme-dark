import Error404 from '_screens/pages/Page404'
import Home from '_screens/Home'
import Login from '_screens/Login'
import Gallery from '_screens/pages/gallery'

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
		path: '/gallery',
		name: 'gallery',
		component: Gallery,

	},
	{
		path: '*',
		name: 'Error404',
		component: Error404,
	},
]

export default routes
