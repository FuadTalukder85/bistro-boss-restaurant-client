import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    // how does reduce work
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || MyCart</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-evenly h-[60px] items-center'>
                <h2 className='text-3xl'>Total item: {cart.length}</h2>
                <h2 className='text-3xl'>Total price: {total}</h2>
                <button className='btn btn-sm'>PAY</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className='text-end'>$ {item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-600 text-white text-end"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;