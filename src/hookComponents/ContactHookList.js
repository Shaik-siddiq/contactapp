import React from 'react'

function ContactHookList(props) {
    const pushData = (contacts)=>{
                props.pulldata(contacts)
    }

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>more details</th>
                        </tr>
                    </thead>
                    <div>
                    <tbody>
                    {props.contact != null ? props.contact.map( we=>{
                        return(
                            <React.Fragment>
                            {console.log(we)}
                        <tr>
                        <td >{we.cell}</td>
                        
                        </tr>
                        </React.Fragment>
                        )
                        })
                     : null}
                       

                    </tbody>
                    </div>
                </table>
            </div>
        </div>
    )
}

export default ContactHookList
