import { Component } from 'react';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import PropTypes from 'prop-types';
export class GameLayout extends Component {
	render() {
		return (
			<>
				<Information />
				<Field />
				<button
					onClick={this.props.onReset}
					className="w-[500px] text-[26px] border-[#d1c5c5] button"
				>
					Начать заново
				</button>
			</>
		);
	}
}

GameLayout.propTypes = {
	onReset: PropTypes.func.isRequired,
};
