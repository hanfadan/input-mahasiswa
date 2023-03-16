import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [users, setUsers] = useState([]);
    const [jurusans, setJurusan] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            loadUsers();
            loadJurusan()
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/mahasiswa')
        setUsers(result.data)
    }

    const deleteMahasiswa = async (id) => {
        await axios.delete(`http://localhost:8080/mahasiswa/${id}`);
        loadUsers();
    };

    const loadJurusan = async () => {
        const result = await axios.get('http://localhost:8080/jurusan')
        console.log(result.data)
        setJurusan(result.data)
    }

    return (
        <div className="col-span-6 items-start justify-start flex flex-col w-full pt-10 pb-6">
            <h2 className='md:flex items-center justify-center w-full lg:space-y-0 space-y-4 lg:space-x-4 px-12 block uppercase tracking-wide text-gray-700 text-m font-bold'>List Mahasiswa</h2>
            <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4 lg:space-x-4 px-12">
                <table className="table-auto border-x border-b ">
                    <thead>
                        <tr>
                            <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">#</th>
                            <th className="font-bold p-2 border-b border-l border-indigo-700 text-left bg-indigo-700 text-white">Nama</th>
                            <th className="font-bold p-2 border-b border-l text-left border-indigo-700 bg-indigo-700 text-white">Tanggal Lahir</th>
                            <th className="font-bold py-2 px-4 border-b border-l text-left border-indigo-700 bg-indigo-700 text-white">Gender</th>
                            <th className="font-bold py-2 px-4 border-b border-l text-left border-indigo-700 bg-indigo-700 text-white">Jurusan</th>
                            <th className="font-bold py-2 px-4 border-b border-l text-left border-indigo-700 bg-indigo-700 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope='row' key={index}>{index + 1}</th>
                                <td className="p-2 border-b border-l text-left">{user.nama}</td>
                                <td className="p-2 border-b border-l text-left">{user.tgl_lahir}</td>
                                <td className="py-2 px-4 border-b border-l text-left">{user.gender === 0 ? 'Laki-Laki' : 'Perempuan'}</td>
                                <td className="p-2 border-b border-l text-left">{user.id}</td>
                                <td className="py-2 px-4 border-b border-l text-left">
                                    <Link to={`/viewmahasiswa/${user.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-2">Detail Mahasiswa</Link>
                                    <Link to={`/editmahasiswa/${user.id}`} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</Link>
                                    <button onClick={() => deleteMahasiswa(user.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home