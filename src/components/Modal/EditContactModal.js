import React, { Component } from 'react';
import { Modal, Divider, Grid, Segment, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchContacts, editContact } from '../../store/actions/contacts';
import { editContactCloseModal } from '../../store/actions/modal';
import Form from './Form/Form';
// import Form from './Form/FormValidation';



class EditContactModal extends Component {
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

    componentDidMount() {
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

    fileChangedHandler = e => {
                
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
        // console.log(props)
        // debugger
        // console.log(this.state.form.selectedFile)
        return (
            <Modal open={this.props.isModalOpen}>
                <Icon 
                    name='close' 
                    color='red' 
                    size='large' 
                    link
                    onClick={() => {this.props.editContactCloseModal()}}/>
                <Modal.Content>
                    <Segment>
                     <Grid columns={2} relaxed='very'>
                            <Grid.Column>
                                <Image src={this.state.form.selectedFile} wrapped ui={true} />
                                
                                <Divider horizontal>or</Divider>

                                <input type="file" name="file" onChange={this.fileChangedHandler} />
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