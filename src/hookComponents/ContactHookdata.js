import React from 'react'

function ContactHookdata(props) {
    return (
        <div>
             {props.contactdata != null?
                (
                    <div><img src={props.contactdata.picture.large} /><div>
                    <ul>
                        <li>
                            {props.contactdata.name.first}
                        </li>
                        <li>
                            {props.contactdata.dob.age}
                        </li>
                        <li>{props.contactdata.gender}</li>
                        <li>{props.contactdata.location.city}</li>
                        <li>{props.contactdata.email}</li>
                    </ul>
                        </div>
                    </div> ):null }
        </div>
    )
}

export default ContactHookdata
