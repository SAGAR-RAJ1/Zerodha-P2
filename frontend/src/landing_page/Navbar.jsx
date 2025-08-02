import { Link } from "react-router-dom";


function Navbar() {
    return ( 
       <nav class="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"FFF",height:"75px"}}>
  <div class="container">
    <Link class="navbar-brand" to="/"><img style={{width:"30%"}} src="Images/logo.svg" alt="" srcset="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/signup">Sign up</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/price">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/support">Support</Link>
        </li>
       
       
      </ul>
      </form>
    </div>
  </div>
</nav>
);
}

export default Navbar;