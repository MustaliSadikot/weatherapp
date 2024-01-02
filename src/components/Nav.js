import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <>
    <nav className="navbar rounded text-light">
          <div className="container-fluid">
            <h6 className="navbar-brand text-warning">AirVisual</h6>
            <div className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Enter City"
                aria-label="Search"
                onChange={props.handlechange}
              />
              <button className="btn btn-warning" type="submit" onClick={props.getinfo}>
                Search
              </button>
              {/* <Link type="button" class="btn btn-warning ms-2" to="/review">Review</Link> */}
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nav