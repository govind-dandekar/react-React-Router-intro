import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/MainNavigation';
import classes from './Root.module.css'

function RootLayout() {
	return <>
		<MainNavigation />
		{/* child routes are rendered via Outlet*/}
		<main className={classes.content}>
			<Outlet />
		</main>
	</>
}

export default RootLayout;