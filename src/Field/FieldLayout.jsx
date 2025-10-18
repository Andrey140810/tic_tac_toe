import styles from './Field.module.css'
import PropTypes from 'prop-types';

export function FieldLayout({ field, onClick }) {
	return (
		<div className={styles.field}>{field.map((button, index) => <button onClick={() => onClick(index)} className={styles['field-button']} key={index}>{button}</button>)}</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
}
