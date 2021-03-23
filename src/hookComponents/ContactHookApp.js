import React,{useState,useEffect} from 'react'
import ContactHookdata from './ContactHookdata'
import ContactHookList from './ContactHookList'
import Axios from 'axios'

function ContactHookApp() {
    const [contact, setContact] = useState([])
    const [contactselect, setContactSelect] = useState(null)

    let pullData = (contacts)=>{setContactSelect(contactselect=contacts)}
    useEffect(() => {
        let url = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        Axios.get(url)
                .then((response)=>{ setContact([...contact, response.data])})
                .catch((error)=>{console.log(error)})
    
    }, [])


    return (
        <div>
            <ContactHookList pulldata={pullData} contact={contact}/>
            <ContactHookdata contactdata={contactselect} />
        </div>
    )
}

export default ContactHookApp
