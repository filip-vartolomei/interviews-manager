import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';

const DropDownContact = (props) => {
    return (
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
                <a className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Contact List</span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </a>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <p className="menu-hoverable-item">
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <a >name@gmail.com</a>
                        </p>
                    </div>
                    <div className="dropdown-item">
                        <p className="menu-hoverable-item">
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            <a >+011234567890</a>
                        </p>
                    </div>
                    <div className="dropdown-item">
                        <p className="menu-hoverable-item">
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                            <a >Linkedin HR</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDownContact;