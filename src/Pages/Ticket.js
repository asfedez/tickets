import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import QRCode from "react-qr-code";

function Ticket() {

    let navigate = useNavigate();
    let {ticketID} = useParams();
    return(
        <div>
            This is the {ticketID} Ticket
            <QRCode value={ticketID} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
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