import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Versoin 1.0.0</h4>
      <Link to="/" className="flex items-center"><FaArrowLeft/> Go Back</Link>
    </div>
  )
}

export default About