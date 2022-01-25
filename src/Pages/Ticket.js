import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import QRCode from "react-qr-code";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import {useState, useEffect} from 'react'
import { db } from "../firebase-config";

function Ticket() {

    let navigate = useNavigate();
    let {ticketID} = useParams();
    const [ticket, setTicket] = useState([]);

    
    useEffect(()=>{
        const getTicket = async () =>{
           
            const data = await  getDoc(doc(db, "tickets", ticketID))
            setTicket(data.data());
            console.log(ticket.name);
        
        }

        getTicket()
    }, [])

    return(
        <div>
            This is the {ticketID} Ticket
            {ticket.name}
            Validate {ticket.validate}?
            <button onClick={()=>{navigate(`/ticket/validate/${ticketID}`)}}> Validate</button>
            {/* <QRCode value={username} size={256} bgColor="#282c34" fgColor="#fff" level="H" /> */}
        </div> 
    )
}

export default Ticket;