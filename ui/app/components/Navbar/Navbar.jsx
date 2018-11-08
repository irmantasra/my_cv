import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import tabOptions from '../../constants/tabOptions';
import colors from '../../constants/colors';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	handleTabSwitch(link) {
		this.props.history.push(link);
	}

	renderTabs() {
		const { classes } = this.props;
		const options = _.values(tabOptions);
		return _.map(options, (option, id) => {
			return (
				<Tab
					key={id}
					label={option.label}
					classes={{label: classes.label}}
					onClick={() => this.handleTabSwitch(option.link)}
				/>
			);
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<Tabs
				value={this.state.value}
				onChange={this.handleChange}
				indicatorColor="primary"
				textColor="primary"
				fullWidth
				className={classes.navBar}
			>
				{this.renderTabs()}
			</Tabs>
		)
	}
};

const styles = {
	root: {
		flexGrow: 1
	},
	label: {
		fontSize: 20
	},
	navBar: {
		width: 'auto',
		backgroundColor: colors.mainGreen,
		height: 36
	}
};

export default withStyles(styles)(Navbar);
