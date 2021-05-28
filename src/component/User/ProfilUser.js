import React from 'react';

const profiluser = (props) => {
    const myStryle = "with: 18rem";
    return (
        <>
            
            <div className="col-lg-6 col-md-8 shadow-sm mx-auto" style={{ myStryle }}>
                <em className="text-muted"> Profil User</em>
                <div className="text-center m-4">
                    <img className="card-img-top" src={props.image} />
                </div>

                <div className="card-body">
                    <h1 className="card-title">{props.name} </h1>
                    <p className="card-text m-4" >{props.description} </p>
                </div>

                <div className="btn-group m-4">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                        Update Profil
                    </button>
                </div>

            </div>

        </>
    )
};

export default profiluser;