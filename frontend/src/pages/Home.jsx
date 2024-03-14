import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/instructors')
            .then((response) => {
                setInstructors(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>instructors list</h1>
            <Link to= '/instructors/add'>
                <MdOutlineAddBox className='text-sky-800 text-4x1' />
            </Link>
        </div>
    {loading ? (
        <Spinner />
    ) : (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>no</th>
                    <th className='border border-slate-600 rounded-md'>name</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>description</th>
                    <th className='border border-slate-600 rounded-md'>operation</th>
                </tr>
            </thead>
            <tbody>
                {instructors.map((instructor, index) => (
                    <tr key={instructor._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {instructor.name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {instructor.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {instructor.description}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/instructors/details/${instructor._id}`}>
                                    <BsInfoCircle className='text-2x1 text-green-800' />
                                </Link>
                                <Link to={`/instructors/edit/${instructor._id}`}>
                                    <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                </Link>
                                <Link to={`/instructors/delete/${instructor._id}`}>
                                    <MdOutlineDelete className='text-2x1 text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
    </div>
  )
}

export default Home