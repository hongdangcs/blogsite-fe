import React, {useState} from 'react';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const user = true;
    const [isMenuOpen, setMenuOpen] = useState(false);
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
                                    <div className="write-button">
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
                                                <h3>Username</h3>
                                            </div>
                                            <hr/>
                                            <a href="/profile" className="sub-menu-link">
                                                <img src="assets/profile.svg" className="user-profile-pic"/>
                                                <p>Profile</p>
                                            </a>
                                            <a href="/setting" className="sub-menu-link">
                                                <img src="/assets/setting.svg" alt="settings icons"/>
                                                <p>Settings</p>
                                            </a>
                                            <a href="/help" className="sub-menu-link">
                                                <img src="/assets/help.svg" alt="help and support icon"/>
                                                <p>Help & Support</p>
                                            </a>
                                            <a href="/logout" className="sub-menu-link">
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