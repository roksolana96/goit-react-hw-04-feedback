import PropTypes from 'prop-types';

export const Section = ({title,children}) => {
    return (
        <>
            <h2>{title}</h2>
            <>{children}</>
        </>
    )
}

// "Please leave feadback"
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};