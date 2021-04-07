import React from 'react';

const Event = ({event}) => {

    const deleteEvent = id =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method:'DELETE',
            
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
    }
    return (
        <div className="col-md-4">
            <img style={{height:'300px'}} src={event.imageURL} alt=""/>
            <button onClick = {()=> deleteEvent(event._id)}>Delete</button>
            <h3>{event.name} </h3>
        </div>
    );
};

export default Event;