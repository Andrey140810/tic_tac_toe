import { FieldLayout } from "./FieldLayout";
import PropTypes from 'prop-types';

export function Field({ field, onClick }) {
	return (
		<FieldLayout onClick={onClick} field={field} />
	)
}

Field.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func
}
