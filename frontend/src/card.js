import './App.module.css';
import React, {useState} from "react";
import {Field, Form, Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import classes from './App.module.css'


function Card() {
    const initialValues = {
        cardNumber: '',
        ExpirationDate: '',
        cvv: '',
        amount: '',

    }
    const [data, setData] = useState(null)

    const validationSchema = Yup.object({
        cardNumber: Yup.string()
            .required('Required')
            .length(16, 'must be 16 symbols'),
        ExpirationDate: Yup.string()
            .required('Required')
            .length(10, 'smth wrong'),
        cvv: Yup.string()
            .required('Required')
            .length(3, 'must be 3 symbols'),
        amount: Yup.string()
            .required('Required'),
    })

    const onSubmit = (values) => {
        debugger
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(response => response.json())
            .then(response => setData(response.message1))

    }

    return (
        (<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur>

                <Form className={classes.all}>

                    <div><Field className={classes.field} placeholder="Card number" type='number' name='cardNumber'
                                component='input'/> <span className={classes.error}> <ErrorMessage name='cardNumber' /> </span></div>
                    <div><Field className={classes.field} placeholder="MM/YYYY" type='date' name='ExpirationDate'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='ExpirationDate' /> </span></div>
                    <div><Field className={classes.field} placeholder="CVV" type='number' name='cvv'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='cvv' /> </span></div>
                    <div><Field className={classes.field} placeholder="Amount" type='number' name='amount'
                                component='input'/>  <span className={classes.error}> <ErrorMessage name='amount' /> </span></div>
                    <button type="submit" className={classes.sub}>submit</button>
                    <div>{!data ? null : <p  className={classes.response}> твоя карта - {data} </p>}</div>
                </Form>
            </Formik>
        )
    );
}

export default Card;
