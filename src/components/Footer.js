import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter is-size-6 has-text-centered">
        <p>Copyright © 2019&nbsp;
          <a href="https://monkeystation.nl/" target="_blank" rel="noopener" className="has-text-white-ter">Monkey Station</a>&nbsp;
          <FaRegEnvelope style={{position:'relative', top:'3px'}} />&nbsp;
          <a href="mailto:info@membersihkanindonesia.org" className="has-text-white-ter">info@membersihkanindonesia.org</a>
        </p>
      </footer>
    )
  }
}

export default Footer
