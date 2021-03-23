import React, { Component } from 'react'

 class Contactlist extends Component {
     pushdata = (contact)=>{
         this.props.pulldata(contact)
     }
    render() {
        return (
            <div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>Email</th>
                        <th>moredetails</th>
                     </tr>
                    </thead>
                    <tbody>
                   {this.props.ContactData != null ?(
                       
                       <>
                       {this.props.ContactData.map((contact)=>{
                        return(
                        <tr >
                            <td>{contact.login.uuid}</td>
                            <td >{contact.name.last}</td>
                            <td>{contact.dob.age}</td>
                            <td>{contact.email}</td>
                            <td><button onClick={this.pushdata.bind(this,contact)}>click here</button></td>

                        </tr>
                        );
                      })}
                    </>
                  ) : null}  
                    </tbody>
        
                </table>
            </div>
                
            </div>
        )
    }
}
export default Contactlist
