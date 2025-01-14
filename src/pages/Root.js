import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/MainNavigation';

function RootLayout() {
	return <>
		<MainNavigation />
		{/* child routes are rendered via Outlet*/}
		<main>
			<Outlet />
		</main>
	</>
}

export default RootLayout;