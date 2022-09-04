import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{bottom:'0px'}}>
<footer id="footer" className="footer" >
    <div className="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>

  <Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
    </div>
  )
}

export default Footer