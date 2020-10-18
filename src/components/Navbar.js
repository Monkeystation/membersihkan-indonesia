import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Membersihkan Indonesia" style={{ height: '2rem' }} />
          </Link>

          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={`navbar-menu ${this.state.navBarActiveClass}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-primary is-light social" to="https://www.facebook.com/membersihkanID" target={'_blank'}><FaFacebookSquare size={30} /></Link>
            </div>
            <div className="navbar-item">
              <Link className="button is-primary is-light social" to="https://www.instagram.com/membersihkan_id/" target={'_blank'}><FaInstagramSquare size={30} /></Link>
            </div>
            {/* <div className="navbar-item">
              <Link className="button is-primary is-light" to="/support">Support us</Link>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
