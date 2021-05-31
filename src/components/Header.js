import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, toggleAddTask, showAddTask}) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{ title }</h1>
      {location.pathname === '/' && <Button backgroundColor={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={toggleAddTask} />}
    </header>
  )
}

Header.protoTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Task Manager'
}

export default Header