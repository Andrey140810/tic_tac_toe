import styles from './Information.module.css'
import PropTypes from 'prop-types';

export function InformationLayout({ statusText }) {

	return <label className={styles['information-label']}>{statusText}</label>

}

InformationLayout.propTypes = {
	statusText: PropTypes.string.isRequired
}
