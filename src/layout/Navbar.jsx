import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="w-full h-[4rem] fixed top-0 left-0 flex justify-between items-center shadow-md py-4 
            bg-white z-20 px-6">
                <img src='/buddy-logo.png' alt='logo' className='w-60' />
                <div className="flex items-center gap-4">
                    <h5>Language</h5>
                    <button>EN</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
