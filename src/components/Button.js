import PropTypes from 'prop-types' 

const Button = ({backgroundColor, text, onClick}) => {
  return <button className='btn' style={{backgroundColor}} onClick={onClick}>{ text }</button>
}

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;