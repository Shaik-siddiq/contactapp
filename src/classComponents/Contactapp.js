import React, { Component } from 'react'
import Axios from 'axios'
import Contactlist from './Contactlist'
import ContactData from './ContactData'

 class Contactapp extends Component {
     constructor(props){
         super(props)
         this.state={
             contact:null,
             errormsg:null,
             contactselectdata:null
        }
     }
     pulldata=(contact)=>{
         this.setState({contactselectdata:contact,})
     }
    
     componentDidMount (){
         let url = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
         Axios.get(url)
         .then((response)=>{this.setState({contact:response.data})})
         .catch((errmsg)=>{this.setState({errormsg:errmsg})})
     }
    render() {
        return (
            <div>
                <h1>contact App</h1>
                <Contactlist  pulldata={this.pulldata} ContactData={this.state.contact}/>
                <ContactData contacts={this.state.contactselectdata}/>
            </div>
        )
    }
}
export default Contactapp
