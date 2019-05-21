import React, { Component } from 'react';
import { Button, Header, Modal, Form,  Divider, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createContact } from '../../store/actions/contacts';


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
        this.props.createContact();
    }

    changeInputHandler = (e) => {

    }

    render () {
        return (
            <Modal trigger={<Button>SAD NEW CONTACT</Button>} closeIcon>
                <Header icon='phone' content='Miu miu' />
                <Modal.Content>
                    <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                it's a place for uploading images
                            </Grid.Column>
                            <Grid.Column>
                                <Form onSubmit={this.submitHandler}>
                                    <Form.Field>
                                        <label>Phone Number</label>
                                        <input placeholder='Phone Number' name='phone' onChange={this.changeInputHandler} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input placeholder='First Name' name='name' onChange={this.changeInputHandler} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' name='surname' onChange={this.changeInputHandler} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Email</label>
                                        <input placeholder='Email' name='mail' onChange={this.changeInputHandler} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Company</label>
                                        <input placeholder='Company' name='company' onChange={this.changeInputHandler} />
                                    </Form.Field>
                                    {/* <Button color='purple' type='submit'>Submit</Button> */}
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Divider vertical>And</Divider>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='purple' type='submit' onClick={this.submitHandler}>Submit</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}


export default connect(null, {createContact})(ModalContact);