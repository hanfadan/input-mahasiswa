import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function AddMahasiswa() {
    let navigate = useNavigate();
    const [jurusans, setJurusan] = useState([]);
    const [user, setUser] = useState({
        nama: "",
        tgl_lahir: "",
        gender: "",
        jurusan: {
            id: '',
            nama: ''
        }
    })

    useEffect(() => {
        loadJurusan();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8080/mahasiswa", user).then((response) => {
            console.log(response);
            setUser({
                nama: "",
                tgl_lahir: "",
                gender: "",
                jurusan: {
                    id: '',
                    nama: ''
                }
            });
        });
        navigate("/");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleNestedChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            nestedValue: { ...user.nestedValue, [name]: value },
        });
    };


    const loadJurusan = async () => {
        const result = await axios.get('http://localhost:8080/jurusan')
        setJurusan(result.data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="block uppercase tracking-wide text-gray-700 text-m font-bold text-center m-4">Add Mahasiswa</h2>
                    <div className="card">
                        <form onSubmit={onSubmit}>
                            <div className="card-header">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <label htmlFor="nama" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Nama
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="nama"
                                            type="text"
                                            placeholder="Masukaan Nama"
                                            name="nama"
                                            value={user.nama}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li className="list-group-item">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Tanggal Lahir
                                        </label>
                                        <input type="date" id="date" name="tgl_lahir" value={user.tgl_lahir} onChange={handleChange} />
                                    </li>
                                    <li className="list-group-item">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                            Gender
                                        </label>
                                        <select id="gender" name="gender" value={user.gender} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                            <option value="">--Select an option--</option>
                                            <option value={0}>Laki Laki</option>
                                            <option value={1}>Perempuan</option>
                                        </select>
                                    </li>
                                    <li className="list-group-item">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                            Jurusan
                                        </label>
                                        <select id="jurusanNama" name="jurusanNama" value={user.jurusan} onChange={handleNestedChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                            <option value="">--Select an option--</option>
                                            {jurusans.map((jurusan) => (
                                                <option key={jurusan.id} >{jurusan.nama}</option>
                                            ))}
                                        </select>
                                    </li>

                                    {/* <li className="list-group-item">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-nama">
                                            Hobi
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 
                        text-gray-700 border border-red-500 rounded py-3 px-4 
                        mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-first-nama" type="text"
                                            placeholder="Masukkan Hobi"
                                            nama="nama"
                                            value={user.hobi}
                                            onChange={handleInputChange}
                                        />
                                    </li> */}
                                </ul>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                    Cancel
                                </Link>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddMahasiswa