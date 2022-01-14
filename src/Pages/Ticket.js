import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Ticket() {

    let navigate = useNavigate();
    let {ticketID} = useParams();
    return(
        <div>
            This is the {ticketID} Ticket
            <button
                onClick={
                    () => {
                        navigate("/tickets")
                    }
                }
            >
                {" "}
                Change to about
            </button>
        </div> 
    )
}

export default Ticket;