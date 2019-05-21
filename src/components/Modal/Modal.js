import React from 'react';
import { Button, Header, Modal, Form,  Divider, Grid, Segment } from 'semantic-ui-react';


const modal = () => (
  <Modal trigger={<Button>SAD NEW CONTACT</Button>} closeIcon>
    <Header icon='phone' content='Miu miu' />
    <Modal.Content>
        <Segment>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <label>Phone Number</label>
                            <input placeholder='Phone Number' />
                        </Form.Field>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                            <label>Company</label>
                            <input placeholder='Company' />
                        </Form.Field>
                        {/* <Button color='purple' type='submit'>Submit</Button> */}
                    </Form>
                </Grid.Column>
            </Grid>
        </Segment>
        <Divider vertical>And</Divider>
    </Modal.Content>
    <Modal.Actions>
        <Button color='purple' type='submit'>Submit</Button>
    </Modal.Actions>
  </Modal>
)

export default modal;