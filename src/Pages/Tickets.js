import React from 'react'
import {useState, useEffect} from 'react'
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import QRCode from "react-qr-code";
import { useNavigate, useParams } from 'react-router-dom'
import { doc, setDoc, addDoc } from "firebase/firestore";

function Tickets() {

    const [tickets, setTickets] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        const getTickets = async () =>{
            const data = await getDocs(collection(db, "tickets"))
            console.log(data);
            setTickets(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})))
        }

        getTickets()
    }, [])

    const addUser = async () =>{
        console.log("presionado");

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "tickets"), {
            name: "Random 3",
            validate: 0
        });
        console.log("Document written with ID: ", docRef.id);
        const data = await getDocs(collection(db, "tickets"))
        setTickets(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})))
    }

    return(
        <div>
            This is the Tickets{}
            <button onClick={()=>{addUser()}}>Create ticket</button>
            {
                tickets.map((ticket)=>{
                    return(
                        <div key={ticket.id}>
                            <p>Ticket {ticket.id}</p>
                            <p>Name {ticket.name}</p>
                            <p>Validate {ticket.validate}</p>
                            <QRCode value={ticket.id} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
                            <button onClick={()=>{navigate(`/ticket/${ticket.id}`)}}> Generate validation</button>
                        </div>
                    )
                })
            }

        </div>
    )
     
}

export default Tickets;