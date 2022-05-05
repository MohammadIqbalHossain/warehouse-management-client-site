import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";

const AddBooksInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/book`;
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
        })
    };

    return (
        <div className="md:w-[700px] md:mx-auto mx-10">
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
                    type="number" {...register("price",
                        { min: 18, max: 99 })}
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
                    required
                    type="text" {...register("email rounded-lg p-5 text-lg",
                        { min: 18, max: 99 })}
                />
               
                <input className="bg-gray-900 text-white py-3 px-10 rounded-xl mb-10 mx-auto"
                    type="submit" />
            </form>
        </div>
    );
};

export default AddBooksInventory;