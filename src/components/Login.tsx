import React, {useState} from 'react';

const Login = () => {
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
                                    Remember me
                            </label>
                            <div className="field">
                                <button className="button" type="submit" style={{backgroundColor:'#577D86',color:'white',}}>
                                    Submit
                                </button>
                            </div>
                            <div>
                                <span><a href="#" className="forgot-pass">Forgot Password</a></span>
                            </div>
                            <span>Do not have an account? <a href="/signup">Create one</a></span>
                        </div>
                    </form>
                </div>
                <div className="column"></div>
            </div>

        </section>


    );
};

export default Login;