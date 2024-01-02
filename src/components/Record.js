import React from 'react'

function Record(props) {
  return (
    <>
          <div className="col">
            <div className={`card my-3`}>
              <div className="card-body">
                <p className="card-text">
                <i className="bi bi-quote"></i>{props.data.review}<i className="bi bi-quote"></i>
                </p>
                <h6>
                  <i className="bi bi-person-circle me-1"></i>{props.data.user}
                </h6>
                <h6>{props.data.email}</h6>
              </div>
          </div>
        </div>
    </>
  )
}

export default Record