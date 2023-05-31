import React, {useState, ChangeEvent, FormEvent } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return response.json().then((data) => {
                        alert(data.message);
                    });
                }
            })
            .then((data) => {
                const accessToken = data.accessToken;
                window.location.href = '/';
                document.cookie = `access_token=${accessToken}; expires=Sat, 01 Jan 2024 00:00:00 GMT`;
            })
            .catch((error) => {
                console.log(error);
            });
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
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Enter Username"
                                        name="username"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
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
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
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
                                    Continue
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