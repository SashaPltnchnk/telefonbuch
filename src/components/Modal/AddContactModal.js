import React, { Component } from 'react';
import { Modal, Divider, Grid, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createContact, fetchContacts } from '../../store/actions/contacts';
import { addContactCloseModal, addContactOpenModal } from '../../store/actions/modal';
import Form from './Form/Form';


class AddContactModal extends Component {
    state = {
        form: {
            name: '',
            surname: '',
            phone: '',
            mail: '',
            company: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.createContact();        
    }

    createContact = () => {
        this.props.createContact(this.state.form)
            .then(() => {this.props.addContactCloseModal()})
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

    render () {
        
        console.warn(this.state.form)
        // заходит, консоль наебала
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
                                it's a place for uploading images
                            </Grid.Column>
                            <Grid.Column>
                                <Form 
                                    submitHandler={this.submitHandler}
                                    changeInputHandler={this.changeInputHandler}
                                    form={this.state.form}
                                    buttonText={'Save new contact'}
                                    buttonEvent={this.createContact}
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