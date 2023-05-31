import React, {useState} from 'react';

interface HeaderProps {

}


type Profile = {
    name: string;
    username: string;
    email: string;
    bio: string;
};

const handleLogout = () => {

    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    window.location.href = '/';

}

const handleWrite = () => {

    window.location.href = '/write';

}


const Header: React.FC<HeaderProps> = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState('');


    let user = null;

    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('access_token=')) {
            user = decodeURIComponent(cookie.substring('access_token='.length));

            console.log(user);

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + user);

            var requestOptions: RequestInit = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("http://localhost:8000/api/profile/", requestOptions)
                .then(response => response.json())
                .then(data => setUserName(data.name))
                .catch(error => console.log('error', error));
        }
    }


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a className="navbar-logo" href="/">
                        <img
                            className="navbar-logo-image"
                            src="/assets/logo.svg"
                            alt="Blog Site"
                        />
                    </a>
                </div>
                <div className="navbar-search">
                    <input
                        className="navbar-search-input"
                        type="text"
                        placeholder="Search..."
                    />
                    <button type="submit">Search</button>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            {user ? (
                                <>
                                    <div className="write-button" onClick={handleWrite}>
                                        <button type="submit" className="write">
                                            <img
                                                src="/assets/write.svg"
                                                alt="write"
                                                style={{paddingRight: "5px"}}
                                            />
                                            Write
                                        </button>
                                    </div>
                                    <button className="profile-picture" onClick={() => setMenuOpen(!isMenuOpen)}>
                                        <img
                                            src="/assets/profile.svg"
                                            alt="Profile"
                                            className="user-profile-pic"
                                        />
                                    </button>
                                    {isMenuOpen && (
                                        <div className="sub-menu-wrap">
                                            <div className="sub-menu">
                                                <div className="user-info">
                                                    <img
                                                        src="assets/profile.svg"
                                                        alt=""
                                                        className="user-profile-pic"
                                                    />
                                                    <h3>{userName}</h3>
                                                </div>
                                                <hr/>
                                                <a href="/profile" className="sub-menu-link">
                                                    <img src="assets/profile.svg" className="user-profile-pic"/>
                                                    <p>Profile</p>
                                                </a>
                                                <a href="/setting" className="sub-menu-link">
                                                    <img style={{width: '40px', height: '40px'}}
                                                         src="/assets/setting.svg" alt="settings icons"/>
                                                    <p>Settings</p>
                                                </a>
                                                <a href="/help" className="sub-menu-link">
                                                    <img src="/assets/help.svg" alt="help and support icon"/>
                                                    <p>Help & Support</p>
                                                </a>
                                                <a href="/" className="sub-menu-link" onClick={handleLogout}>
                                                    <img src="/assets/logout.svg" alt="logout icon"/>
                                                    <p>Logout</p>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="buttons">
                                    <a className="button" href="/login">
                                        <strong>Log in</strong>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;