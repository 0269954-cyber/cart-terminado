import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {

    return (
        <div className="flex justify-center w-screen bg-blue-800 text-white p-4">
            <ul className="list-none flex gap-4 font-bold cursor-pointer">
                <li>
                    <Link to="/">
                        Catálogo
                    </Link>
                </li> <li>
                    <Link to="/cart">
                        Carrito
                    </Link>
                </li>
            </ul>
        </div>
    )
}