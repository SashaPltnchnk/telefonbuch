import React, { Component } from 'react';
import { Modal, Divider, Grid, Segment, Icon, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createContact, fetchContacts } from '../../store/actions/contacts';
import { addContactCloseModal, addContactOpenModal } from '../../store/actions/modal';
import Form from './Form/Form';
// import Form from './Form/FormValidation';


class AddContactModal extends Component {
    state = {
        form: {
            name: '',
            surname: '',
            phone: '',
            mail: '',
            company: '',
            selectedFile: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.createContact();
        // this.uploadHandler();        
        this.props.addContactCloseModal();
    }

    createContact = () => {
        this.props.createContact(this.state.form)
            // .then(() => {this.props.addContactCloseModal()})
                .then(() => {this.props.fetchContacts()})
    }

    changeInputHandler = (e) => {
        const {name, value } = e.target
        this.setState((state) => {
            return {
                ...state,
                form: {
                    ...state.form,
                    [name]: value
                }
            }
        })
    }

    fileChangedHandler = e => {
        
        // const formData = new FormData()
        // formData.append('asd', e.target.files[0]) 
        
        //  const file = URL.createObjectURL(e.target.files[0])
         const reader = new FileReader()

         

         reader.onload  = () => {

            //  debugger
            this.setState(state => {
                return {
                    ...state,
                    form: {
                        ...state.form,
                        selectedFile: reader.result
                    }
                }
            })
         }

         reader.readAsDataURL(e.target.files[0])
    }

    uploadHandler = () => {
        console.log(this.state.form.selectedFile)
        const formData = new FormData()
        formData.append(
          'myFile',
          this.state.form.selectedFile,
          this.state.form.selectedFile.name
        )
      }

    render () {
        const contactImage = this.state.form.selectedFile ? 
            <img src={this.state.form.selectedFile} alt="userImage" className="ui medium rounded image"></img>
            : <Message>
                <Message.Header>Please choose image</Message.Header>
            </Message>
            
        
        console.warn(this.state.form)
           return (
            <Modal open={this.props.isModalOpen}>
                <Icon 
                    name='close' 
                    color='red' 
                    size='huge' 
                    link
                    
                    onClick={() => {this.props.addContactCloseModal()}}/>
                <Modal.Content>
                    <Segment>
                     <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                {contactImage}
                                <input type="file" name="file" onChange={this.fileChangedHandler} />
                            </Grid.Column>
                            <Grid.Column>
                                <Form 
                                    submitHandler={this.submitHandler}
                                    changeInputHandler={this.changeInputHandler}
                                    form={this.state.form}
                                    buttonText={'Save new contact'}
                                    // buttonEvent={this.createContact}
                                    />
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider vertical>And</Divider>
                </Modal.Content>
            </Modal>
        )
    }
}


export default connect((store) => ({isModalOpen: store.modal.isAddContactModalOpen}), {createContact, addContactCloseModal, addContactOpenModal, fetchContacts})(AddContactModal);