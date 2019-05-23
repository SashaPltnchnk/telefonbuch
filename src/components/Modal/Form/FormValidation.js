import React, { Component } from 'react';
import { Button,  Form } from 'semantic-ui-react';
import validate from 'react-joi-validation';
import Joi from 'joi-browser';

// ReactJoiValidations.setJoi(Joi);

var schema = Joi.object().keys({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.number().min(10).required(),
    mail: Joi.string().email().required(),
    company: Joi.string().required()
  });


class FormQ extends Component {
    render() {
        const {
            form: { name, surname, phone, mail, company },
            errors, changeHandler, validateHandler 
          } = this.props;



        return (
            <Form onSubmit={this.props.submitHandler}>
                    <Form.Field >
                        <label>Phone</label>
                        <input 
                            placeholder='Phone' 
                            name='phone' 
                            value={this.props.form[phone]} 
                            onChange={ (e) => {this.props.changeInputHandler(e); changeHandler('phone')}} 
                            // onChange={ changeHandler('username') }
                            onBlur={ validateHandler('phone') }
                        />
                    </Form.Field>
                    <Form.Field >
                        <label>Name</label>
                        <input 
                            placeholder='Name' 
                            name='name'
                            value={this.props.form[name]} 
                            onChange={this.props.changeInputHandler} 
                            // onChange={ changeHandler('name') }
                            onBlur={ validateHandler('name') }
                        />
                    </Form.Field>
                    <Form.Field >
                        <label>Surname</label>
                        <input 
                            placeholder='Surname'
                            name='surname'
                            value={this.props.form[surname]} 
                            onChange={this.props.changeInputHandler} 
                            // onChange={ changeHandler('surname') }
                            onBlur={ validateHandler('surname') }
                        />
                    </Form.Field>
                    <Form.Field >
                        <label>Company</label>
                        <input 
                            placeholder='Company'
                            name='company'
                            value={this.props.form[company]} 
                            onChange={this.props.changeInputHandler} 
                            // onChange={ changeHandler('company') }
                            onBlur={ validateHandler('company') }
                        />
                    </Form.Field>
                    <Form.Field >
                        <label>Mail</label>
                        <input 
                            placeholder='Mail'
                            name='mail'
                            value={this.props.form[mail]} 
                            onChange={this.props.changeInputHandler} 
                            // onChange={ changeHandler('mail') }
                            onBlur={ validateHandler('mail') }
                        />
                    </Form.Field>
            
                    <Button 
                        // disabled={ !props.form.phone
                        //     || !props.form.name
                        //     || !props.form.surname
                        //     || !props.form.mail
                        //     || !props.form.company
                        // }
                        color='purple'>{this.props.buttonText}</Button>
            </Form>
    )
                }
}

FormQ.defaultProps = {
    phone: '',
    name: '',
    surname: '',
    mail: '',
    company: ''
  };
   
  var validationOptions = {
    joiSchema: schema,
    only: 'form'
  };
   
  validate(FormQ, validationOptions)


export default FormQ




// phone: Joi.string().trim().regex(/^[0-9]{7,10}$/).required();
// By using the regex() method here, we can validate the string to ensure its value 
// is 7–10 characters all of which fall between 0 and 9.

