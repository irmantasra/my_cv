import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import _ from 'lodash';
import tabOptions from '../../constants/tabOptions'

export default class Navbar extends Component {
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
		const options = _.values(tabOptions);
		return _.map(options, (option, id) => {
			return (
				<Tab
					key={id}
					label={option.label}
					onClick={() => this.handleTabSwitch(option.link)}
				/>
			);
		});
	}

	render() {
		return (
				<Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
						fullWidth
						className="navbar"
          >
            {this.renderTabs()}
          </Tabs>
		)
	}
}