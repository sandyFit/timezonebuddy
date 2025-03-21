import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="w-full h-[4rem] flex justify-between items-center shadow-md py-4 px-10">
                <h1>Logo</h1>
                <div className="flex items-center gap-4">
                    <h5>Language</h5>
                    <button>EN</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
