import React from "react"
import { Link, Redirect } from "react-router-dom"
import FormInput from "../comps/FormInput"

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    adress: "",
    redirectTo: ""
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addContact = () => {
    const { name, email, phone,adress } = this.state
    const newContact = {
      name,
      email,
      phone,
      adress
    }
    this.props.addContact(newContact)
    this.setState({ redirectTo: "/contacts" })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push />
    }

    return (
      <div>
        <h2>Add Contact</h2>
        <FormInput label="Name" onChange={this.onChange} name="name" />
        <FormInput label="Email" onChange={this.onChange} name="email" />
        <FormInput label="Contact" name="phone" onChange={this.onChange} />
        <formInput label="adress" name="adress" onChange={this.onChange}/>
        <button class="button" onClick={this.addContact}>Add Contact</button>

        <button class="button" onClick={this.props.history.goBack}>Cancel</button>
      </div>
    )
  }
}

export default AddContact
