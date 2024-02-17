import React from 'react'

import "../App.css"
const ManuBars = () => {
    return (
        <div className='bars'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6f6969" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pentagon">
                <path d="M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6f6969" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6f6969" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-weight">
                <circle cx="12" cy="5" r="3" /><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6f6969" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round">
                <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
        </div>
    )
}

export default ManuBars
