import React, { Component } from 'react';
import { Modal, Divider, Grid, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createContact, fetchContacts } from '../../store/actions/contacts';
import { addContactCloseModal, addContactOpenModal } from '../../store/actions/modal';
import Form from './Form/Form';
import axios from 'axios';


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
        
         const file = URL.createObjectURL(e.target.files[0])
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
        // axios.post('http://localhost:8000/api/contacts/', formData)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
      }

    render () {
        
        console.warn(this.state.form)
           return (
            <Modal open={this.props.isModalOpen}>
                <Modal.Header>
                    <Icon 
                        name='close' 
                        color='red' 
                        size='large' 
                        link
                        onClick={() => {this.props.addContactCloseModal()}}/>
                </Modal.Header>
                <Modal.Content>
                    <Segment>
                     <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                <img src={this.state.form.selectedFile} alt="avatar" className="ui medium rounded image"></img>
                                <input type="file" name="file" onChange={this.fileChangedHandler} />
  {/* не нужно точно: */}
                                {/* <button onClick={this.uploadHandler}>Upload!</button> */}
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