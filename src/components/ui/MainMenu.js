import { NavLink } from 'react-router-dom'

const selectedStyle = {
   backgroundColor: "#999",
   color: "#fff"
}

const MainMenu = () =>
   <nav className="main-menu">
      <NavLink exact to="/" activeStyle={selectedStyle}>Home</NavLink>
      <NavLink to="/picker" activeStyle={selectedStyle}>Picker</NavLink>
   </nav>

export default MainMenu