import React from 'react';

const tweet = (props) => {
    
    return (
        <div className="col">
            <em className="text-muted"> All Tweet </em>
            <div className="card shadow-sm p-4">
                <ul className="list-group list-group-flush">
                    <li className="card-text"> {props.text}</li>
                    <li className="text-muted"> {props.date}</li>
                </ul>
            </div>
        </div>
    )
};

export default tweet;