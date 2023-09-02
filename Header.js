import { NavLink } from "react-router-dom";


function Header(){

    return(
<div>




<header>

<nav class="nav-inline">
    
    <ul>
      <li><NavLink to={'/'}> Home</NavLink> </li>
      <li><NavLink to={'About'}> About</NavLink> </li>
      <li><NavLink to={'Contect'}> Contect</NavLink> </li>
     
    
    </ul>
    
    </nav>

      </header> 



</div>

    )
}

export default Header;