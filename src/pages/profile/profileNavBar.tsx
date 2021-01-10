import {NavLink} from 'react-router-dom';
import './profileNav.css';
import Group_250 from './Group_250.svg';
export const ProfileNavBar = () => {
    return (
        <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Insightat</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item">
                       {/* <a>Home </a> */}
                   </li>
               </ul>
                <ul className="navbar-nav navbar-right ">
                <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                    <div className="navbar-survey__search">
                        <span className="navbar-survey__search__border"
                        ><i className="fa fa-search"></i
                        ></span>
                        <input type="text"  className="search_box"
                        placeholder="Search companies" />
                    </div>
                    </form>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={Group_250}></img>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">My Account</a>
                    <a className="dropdown-item" href="#">My Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Help</a>
                    <a className="dropdown-item" href="#">LogOut</a>
                    </div>
                </li>
                </ul> 
            </div>
            </nav>
           </>
    )
}
