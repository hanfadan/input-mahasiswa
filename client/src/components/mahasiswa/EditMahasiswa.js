import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditMahasiswa() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [jurusans, setJurusan] = useState([]);
    const [user, setUser] = useState({
        nama: "",
        tgl_lahir: "",
        gender: "",
        id_jurusan: "",
    })

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
        loadJurusan();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/mahasiswa/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/mahasiswa/${id}`);
        setUser(result.data);
    };

    const loadJurusan = async () => {
        const result = await axios.get('http://localhost:8080/jurusan')
        setJurusan(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="block uppercase tracking-wide text-gray-700 text-m font-bold text-center m-4">Edit Mahasiswa</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="nama" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Nama
                            </label>
                            <input
                                type={"text"}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                placeholder="Enter your name"
                                name="nama"
                                value={user.nama}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Tanggal Lahir
                            </label>
                            <input type="date" id="date" name="tgl_lahir" value={user.tgl_lahir} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Gender
                            </label>
                            <select name="gender" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value={0}>Laki Laki</option>
                                <option value={1}>Perempuan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Jurusan
                            </label>
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {jurusans.map((jurusan, index) => (
                                    <option name="jurusan" key={jurusan.id} value={user.id_jurusan}>{jurusan.nama}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditMahasiswa