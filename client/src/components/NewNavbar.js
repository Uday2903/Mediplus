import React from 'react'

export default function NewNavbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><strong>Pharma</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
        </div>
    </nav>
    </>
  )
}
