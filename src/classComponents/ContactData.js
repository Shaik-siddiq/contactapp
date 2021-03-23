import React, { Component } from 'react'

 class ContactData extends Component {
    render() {
        return (
            <div>
                {this.props.contacts != null?
                (
                    <div><img src={this.props.contacts.picture.large} /><div>
                    <ul>
                        <li>
                            {this.props.contacts.name.first}
                        </li>
                        <li>
                            {this.props.contacts.dob.age}
                        </li>
                        <li>{this.props.contacts.gender}</li>
                        <li>{this.props.contacts.location.city}</li>
                        <li>{this.props.contacts.email}</li>
                    </ul>
                        </div>
                    </div> ):null }
            </div>
        )
    }
}

export default ContactData
