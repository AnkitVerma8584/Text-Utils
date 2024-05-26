import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function MyNavBar(props){
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.uiMode}>
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">{props.appName}</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className={`nav-link ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} `} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`nav-link ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} ` } to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={`nav-link ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} ` } to='/contact'>Contact</NavLink>
                  </li>
                </ul>
                <div class="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleUiMode}/>
                  <label className={`form-check-label text-${props.uiMode==='dark'?'light':'dark'}`} for="flexSwitchCheckDefault">{props.uiMode==='dark'?'Disable':'Enable'} dark mode</label>
                </div>
              </div>
            </div>
          </nav>
        </>
    );
}

export default MyNavBar;

MyNavBar.propTypes = {
    appName:PropTypes.string.isRequired
}

MyNavBar.defaultProps = {
    appName: 'Set App name'
}