import Proptypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = (e) => {
			console.log('I was Clicked');
    }

    return <button 
    onClick={onClick} 
    style={{ backgroundColor: color }}className="btn"
    >
			{text}
		</button>

}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: Proptypes.string,
		color: Proptypes.string,
		onClick: Proptypes.func,
}
export default Button
