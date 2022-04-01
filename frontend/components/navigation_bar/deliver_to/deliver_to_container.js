import React from 'react'

const DeliverTo = (username) => {

    const deliveryMessage = () => {
        if(username) {
            return (
                <div>
                    <p>Deliver to {username}</p>
                    <p></p>
                </div>
            )
        } else {
            return(
                <div>
                    <p>Hello</p>
                    <p>Select Your Address</p>
                </div>
            )
        }
    }   

    return (
        <div>
        )
            <p>Deliver to</p>
        </div>
    )
}