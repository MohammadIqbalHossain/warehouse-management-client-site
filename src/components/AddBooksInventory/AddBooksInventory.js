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
        <div className="w-[700px] mx-auto">
            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="border border-2 my-4"
                    placeholder="Name"
                    {...register("book", { required: true, maxLength: 100 })}
                />
                <textarea
                    className="border border-2 my-4"
                    placeholder="Description"
                    {...register("des",)}
                />
                 <input
                    className="border border-2 my-4"
                    placeholder="Photo URL"
                    type="text" {...register("picture",
                        { min: 18, max: 99 })}
                />
                <input
                    className="border border-2 my-4"
                    placeholder="Price"
                    type="number" {...register("price",
                        { min: 18, max: 99 })}
                />
                <input
                    className="border border-2 my-4"
                    placeholder="Supplier"
                    type="text" {...register("supplier",
                        { min: 18, max: 99 })}
                />
                <input
                    className="border border-2 my-4"
                    placeholder="Email"
                    required
                    type="text" {...register("email",
                        { min: 18, max: 99 })}
                />
               
                <input className="bg-black"
                    type="submit" />
            </form>
        </div>
    );
};

export default AddBooksInventory;