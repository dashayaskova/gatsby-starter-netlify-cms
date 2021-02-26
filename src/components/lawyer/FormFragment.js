import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default ({ people }) => (
    <div>
        <div className="container-pad-hor container-pad-ver">
            <div className="row p-0 m-0">
                <div className="col-md-12 col-lg-8">
                    <div className='small-title'>Our people in Focus</div>
                    <div className="row p-0 m-0">
                        {
                            people.map((person) => (
                                <div className="col-sm-3">
                                    <img src={!!person.avatar.childImageSharp ?
                                        person.avatar.childImageSharp.fluid.src :
                                        person.avatar} style={{ marginBottom: '20px' }}/>
                                    <div className="small-font bold">{person.name}</div>
                                    <div className="small-font" style={{fontStyle: 'italic'}}>{person.vacancy}</div>
                                    <a href="#" className="small-font red bold">View profile →</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4 mt-lg-0 col-sm-12 col-md-12 col-lg-4">
                    <div className='small-title'>Find a Lawyer</div>
                    <Formik
                        initialValues={{ name: '', areas: [], offices: [] }}
                        validate={values => {
                            const errors = {};

                            if (!values.name) {
                                errors.name = 'Required';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert("Successfully submitted!");
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" />

                                <label htmlFor="areas">Areas of Practice</label>
                                <Field
                                    component="select"
                                    id="areas"
                                    name="areas"
                                    value="F"
                                >
                                    <option value="F">Family</option>
                                    <option value="C">Corruption</option>
                                </Field>
                                <ErrorMessage className="error-msg" name="areas" component="div" />

                                <label htmlFor="offices">Offices</label>
                                <Field
                                    component="select"
                                    id="offices"
                                    name="offices"
                                    value="NY"
                                >
                                    <option value="NY">NY</option>
                                    <option value="WA">WA</option>
                                </Field>
                                <ErrorMessage name="offices" component="div" />

                                <button
                                    className="small-font filled-btn pt-1 pb-1 pr-4 pl-4"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit
                  </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
);