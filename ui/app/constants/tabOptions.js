import siteRoutes from '../siteRoutes';

const tabsOptions = {
	MAIN: {
		label: 'Pagrindinis',
		link: siteRoutes.MAIN
	},
	COURSES: {
		label: 'Kursai',
		link: siteRoutes.COURSES
	},
	PORTFOLIO: {
		label: 'Darbai',
		link: siteRoutes.PORTFOLIO
	},
	BLOG: {
		label: `Blogas`,
		link: siteRoutes.BLOG
	}
}

export default tabsOptions;