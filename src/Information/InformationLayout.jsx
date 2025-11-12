import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		return (
			<label className="text-center text-[30px]">
				{this.props.statusText}
			</label>
		);
	}
}

InformationLayout.propTypes = {
	statusText: PropTypes.string.isRequired,
};
