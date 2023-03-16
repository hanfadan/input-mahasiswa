import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewMahasiswa() {

    const [user, setUser] = useState({
        nama: "",
        tgl_lahir: "",
        gender: "",
        jurusan: "",
        hobi: "",
    })

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/mahasiswa/${id}`)
        setUser(result.data)
    }

    const loadHobi = async () => {
        const result = await axios.get(`http://localhost:8080/mahasiswa/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Nama:</b>
                                    {user.nama}
                                </li>
                                <li className="list-group-item">
                                    <b>Tanggal Lahir:</b>
                                    {user.tgl_lahir}
                                </li>
                                <li className="list-group-item">
                                    <b>Gender:</b>
                                    {user.gender}
                                </li>
                                <li className="list-group-item">
                                    <b>Jurusan:</b>
                                    {user.jurusan.nama}
                                </li>
                                {/* <li className="list-group-item">
                                    <b>Hobi :</b>
                                    {user.hobi.nama}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <Link className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ViewMahasiswa