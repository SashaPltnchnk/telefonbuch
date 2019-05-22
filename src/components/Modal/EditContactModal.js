import React, { Component } from 'react';
import { Modal, Divider, Grid, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchContacts, editContact } from '../../store/actions/contacts';
import { editContactCloseModal } from '../../store/actions/modal';
import Form from './Form/Form';


class EditContactModal extends Component {
    state = {
        form: {
            name: '',
            surname: '',
            phone: '',
            mail: '',
            company: ''
        }
    }

    componentDidMount() {
        // вызывается тут и форм андефайнед летит
            this.setState(state => ({
                ...state, 
                form: this.props.contacts.find(contact => contact._id === this.props.id)
            }))
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

    editContact = () => {
        this.props.editContact(this.state.form, this.props.id)
            .then(res => {
                console.log(res);
                this.props.editContactCloseModal();
                this.props.fetchContacts();
            })
    } 

    submitHandler = (e) => {
        e.preventDefault();
        this.editContact();
    }


    render () {
        // console.log(props)
        // debugger
        console.warn(this.state.form)
        return (
            <Modal open={this.props.isModalOpen}>
                <Modal.Header>
                    <Icon 
                        name='close' 
                        color='red' 
                        size='large' 
                        link
                        onClick={() => {this.props.editContactCloseModal()}}/>
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
                                    buttonText={'Save changes'}
                                    buttonEvent={this.editContact}
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

const mapStateToProps = state => ({
    contacts: state.contact.contacts,
    id: state.modal.id,
    isModalOpen: state.modal.isEditContactModalOpen
  })
  
  const mapDispatchToProps = {editContact, editContactCloseModal, fetchContacts}


export default connect(mapStateToProps, mapDispatchToProps)(EditContactModal);