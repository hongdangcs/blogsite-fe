import React, {useState} from 'react';

const Signup = () => {
    const handleSubmit = () => {

    };
    return (
        <section className="section page-body">
            <div className="columns">
                <div className="column"></div>
                <div className="column is-one-third">
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                border: '1px solid lightgray',
                                borderRadius: '3px',
                                padding: '15px',
                            }}
                        >
                            {}
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Enter Username"
                                        name="username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Enter Email"
                                        name="username"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                    I agree to the <a href="/terms-and-conditions">terms and conditions</a>
                            </label>
                            <div className="field">
                                <button className="button" style={{backgroundColor:'#577D86', color:'white',}}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column"></div>
            </div>

        </section>


    );
};

export default Signup;