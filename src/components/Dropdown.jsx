import { useState } from 'react';
import ChevronIcon from '../assets/chevron.svg';

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img
                    src={ChevronIcon}
                    alt="chevron"
                    className={`chevron ${isOpen ? 'open' : ''}`}
                />

            </div>
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
}

export default Dropdown;