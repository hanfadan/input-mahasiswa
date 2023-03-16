import React from 'react'
import { IoSchool } from "react-icons/io5"
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className=" w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-10">
            {/* logo */}
            <div className="items-center w-full justify-center flex space-x-4">
                <Link to="/" className="text-xl text-gray-900 font-medium ">Input Mahasiswa<IoSchool className="w-6 h-6" />

                    {/* <h1 className="text-xl text-gray-900 font-medium "> Input Mahasiswa </h1> */}
                </Link>
            </div>
            {/* icons */}
            <div className="items-center justify-end space-x-6 flex w-full">
                <Link to='/addmahasiswa' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" ><AiOutlinePlus className="w-4 h-4" />
                    <span>Add Mahasiswa</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;