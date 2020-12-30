import React from 'react';
import { List } from './NewsFragment'
import { SocialNetworks } from './Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default ({ recentPosts, title, networks }) => (
    <>
        <Message question="Do you need professional legal assistance?" answer="Get a Quote" />
        <div className="footer-csm small-font light-gray">
            <div className="container-pad container-pad-ver">
                <div className="row p-0 m-0">
                    <div className="col-sm-3">
                        <div className="footer-header">
                            Contacts
                        </div>
                        <div>Address</div>
                        <div style={{ color: 'white' }}>+380931111111</div>
                        <a href="mailto: email@example.com" className="red">email@example.com</a>

                        <div className="footer-header">
                            Keep in touch with us
                        </div>
                        <div>Some information about us</div>
                        <Formik
                            initialValues={{ email: '' }}
                            validate={values => {
                                const errors = {};

                                if (!values.email) {
                                    errors.email = 'Required';
                                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
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
                                    <div className="email-input-row">
                                        <Field type="email"
                                            name="email"
                                            style={{margin: 0}}
                                            placeholder="Enter your e-mail"
                                            className="email-input" />
                                        <button
                                            className="email-btn-input"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            <img src="/img/send.png" className="email-btn-img"/>
                                        </button>
                                    </div>
                                    <ErrorMessage name="email" component="div" />
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-sm-3 footer-list">
                        <div className="footer-header">
                            Explore our site
                        </div>
                        <div className="light-gray">
                            <a>People</a>
                        </div>
                        <hr class="solid" />
                        <div>
                            <a>People</a>
                        </div>
                        <hr class="solid" />
                        <div>
                            <a>People</a>
                        </div>
                        <hr class="solid" />
                        <div>
                            <a>People</a>
                        </div>
                        <hr class="solid" />
                        <div>
                            <a>People</a>
                        </div>
                    </div>
                    <div className="col-sm-3 footer-list">
                        <div className="footer-header">
                            Practice areas
                        </div>
                        <div className="small-font light-gray">
                            <a>Banking & Finance</a>
                        </div>
                        <hr class="solid" />
                        <div className="small-font light-gray">
                            <a>Banking & Finance</a>
                        </div>
                        <hr class="solid" />
                        <div className="small-font light-gray">
                            <a>Banking & Finance</a>
                        </div>
                        <hr class="solid" />
                        <div className="small-font light-gray">
                            <a>Banking & Finance</a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer-header">
                            Recent posts
                        </div>
                        <List classes={{ innerTitle: 'light-gray' }} elements={recentPosts} divider={true} />
                    </div>
                </div>

                <br /><hr />

                <div className="row-csm footer-end">
                    <div className="title light-gray">{title}</div>
                    <div>
                        <SocialNetworks networks={networks} />
                    </div>
                </div>

                <hr />

                <div className="row-csm footer-end">
                    <div>Copyright ⓒ2017. All rights reserved.</div>
                    <div>Developed by Daryna</div>
                </div>
            </div>
        </div>
    </>
);

export const Message = ({ question, answer, onClick }) => {
    const [show, setShow] = React.useState(true);

    return show ?
        <div className="row-csm footer-end message-csm container-pad">
            <div style={{ color: 'white' }}>{question}</div>
            <button
                onClick={(e) => { onClick && onClick(e); setShow(false); }}
                className="outlined-btn">
                {answer}
            </button>
        </div> : <></>
};
