import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection, getDocs, getDoc, doc, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { onSnapshot } from "firebase/firestore";

function TicketValidate() {

    let navigate = useNavigate();
    let {ticketID} = useParams();

    const validateTicket = async () =>{
           
        //get the ticket from db
        const ticket = doc(db, "tickets", ticketID);

        // the update the ticket to new value
        await updateDoc(ticket, {
            validate: 1
        });
        
        //verify
        const data = await  getDoc(doc(db, "tickets", ticketID))
        console.log(data.data());
    
    }


    
    return (<div>
        
        This is the TicketValidate {ticketID}

        <button onClick={validateTicket}> Validate</button>
    </div>)

}

export default TicketValidate;