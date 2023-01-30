import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddBooksInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://warehouse-management-server-site-production-5e2c.up.railway.app/book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast("Successfully added")
            })
    };

    return (
        <div className="md:w-[700px] md:mx-auto mx-10 ">
            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Name"
                    {...register("book", { required: true, maxLength: 100 })}
                />
                <textarea
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Description"
                    {...register("des",)}
                />
                <input
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Photo URL"
                    type="text" {...register("picture",
                        { min: 18, max: 99 })}
                />
                <input
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Price"
                    type="text" {...register("price",
                        { min: 1, max: 900000 })}
                />
                <input
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Supplier"
                    type="text" {...register("supplier",
                        { min: 18, max: 99 })}
                />
                <input
                    className="border border-2 my-4 rounded-lg p-5 text-lg"
                    placeholder="Email"
                    type="text" {...register("email",
                        { min: 18, max: 99 })}
                />

                <input className="bg-gray-900 text-white py-3 px-10 rounded-xl mb-10 mx-auto"
                    type="submit" />
            </form>
        </div>
    );
};

export default AddBooksInventory;