import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Porfolio';
import Courses from '../Courses/Courses';
import Main from '../Main/Main';
import Blog from '../Blog/Blog';
import siteRoutes from '../../siteRoutes'

export default class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="layout">
				<div className="header-name">
					Irmantas Ramanauskas
				</div>
				<Route path={siteRoutes.MAIN} component={Navbar}/>
				<div className="main">
					<Route exact path={siteRoutes.MAIN} component={Main}/>
					<Route exact path={siteRoutes.COURSES} component={Courses}/>
					<Route exact path={siteRoutes.PORTFOLIO} component={Portfolio}/>
					<Route exact path={siteRoutes.BLOG} component={Blog}/>
				</div>
				<div className="footer">
				
				</div>
			</div>
		);
	}
}