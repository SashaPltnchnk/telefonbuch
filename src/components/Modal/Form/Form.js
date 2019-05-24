import React, { Component } from 'react';
import { Button,  Form } from 'semantic-ui-react';
import Joi from 'joi-browser';


class FormQ extends Component {
    static formSchema =  Joi.object().keys({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        phone: Joi.number().min(10).required(),
        mail: Joi.string().email().required(),
        company: Joi.string().required(),
        selectedFile: Joi.string().required()
      });

    isFormValid = () => {
        let isValid

        Joi.validate(this.props.form, FormQ.formSchema, {allowUnknown: true}, (err) => {
          if(err) {
              isValid = false
              console.log(this.props.form)
            console.log(err.message)
          } else {
            isValid = true
          }
        })
    
        return isValid
    }

    render () {
        const inputs = [
            {
                label: 'Phone',
                name: 'phone',
                placeholder: '380',
                type: 'number'
            },
            {
                label: 'Name',
                name: 'name',
                placeholder: 'Name',
                type: 'text'
            },
            {
                label: 'Surname',
                name: 'surname',
                placeholder: 'Surname',
                type: 'text'
            },
            {
                label: 'Mail',
                name: 'mail',
                placeholder: 'Mail',
                type: 'email'
            },
            {
                label: 'Company',
                name: 'company',
                placeholder: 'Company',
                type: 'text'
            }
        ]


    return (
        <Form onSubmit={this.props.submitHandler}>
            {inputs.map(input => {
                // debugger
                return (

                <Form.Field key={input.name}>
                    <label>{input.label}</label>
                    <input 
                        placeholder={input.placeholder} 
                        name={input.name} 
                        value={this.props.form[input.name]} 
                        onChange={this.props.changeInputHandler} 
                        type={input.type}
                    />
                </Form.Field>
                )
            })}
                <Button 
                    disabled={!this.isFormValid()}
                    color='teal'>{this.props.buttonText}</Button>
        </Form>
    )
                }
}


export default FormQ