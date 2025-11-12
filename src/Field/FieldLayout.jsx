import { Component } from 'react';
import PropTypes from 'prop-types';
export class FieldLayout extends Component {
	render() {
		return (
			<div className="m-auto w-[500px] h-[500px] grid grid-cols-3 gap-5">
				{this.props.field.map((button, index) => (
					<button
						onClick={() => this.props.onClick(index)}
						className="button w-[150px] h-[150px] rounded-[5px] bg-orange-200 text-[28px]"
						key={index}
					>
						{button}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
};
