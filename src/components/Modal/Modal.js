import React, { Component } from 'react';
import { Button, Header, Modal,  Divider, Grid, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createContact, fetchContacts } from '../../store/actions/contacts';
import { closeModal, openModal } from '../../store/actions/modal';
import Form from './Form/Form';

// const inputs = [
//     {
//         label: 'Company',
//         name: 'company',
//         placeholder: 'Company'
//     },
//     {
//         label: 'Phone',
//         name: 'phone',
//         placeholder: 'Phone'
//     },
//     {
//         label: 'Name',
//         name: 'name',
//         placeholder: 'Name'
//     },
//     {
//         label: 'Surname',
//         name: 'surname',
//         placeholder: 'Surname'
//     },
//     {
//         label: 'Mail',
//         name: 'mail',
//         placeholder: 'Mail'
//     },
// ]

class ModalContact extends Component {
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
        this.props.createContact(this.state.form)
            .then(() => {this.props.closeModal()})
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
        // console.log(props)
        return (
            <Modal 
                open={this.props.isModalOpen} 
                // trigger={<Button 
                //     onClick={() => {this.props.openModal()}}>SAD NEW CONTACT</Button>} 
                // closeIcon
                >
                <Modal.Header>
                    <Icon 
                        name='close' 
                        color='red' 
                        size='large' 
                        link
                        onClick={() => {this.props.closeModal()}}/>
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
                                    />
                                {/* <Form onSubmit={this.submitHandler}>
                                {inputs.map(input => {
                                    return (

                                    <Form.Field key={input.name}>
                                        <label>{input.label}</label>
                                        <input 
                                            placeholder={input.placeholder} 
                                            name={input.name} 
                                            value={this.state.form[input.name]} 
                                            onChange={this.changeInputHandler} 
                                        />
                                    </Form.Field>
                                    )
                                })}
                                    <Button color='purple' type='submit'>Save new contact</Button>
                                </Form> */}
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider vertical>And</Divider>
                </Modal.Content>
            </Modal>
        )
    }
}


export default connect((store) => ({isModalOpen: store.modal.isModalOpen}), {createContact, closeModal, openModal, fetchContacts})(ModalContact);