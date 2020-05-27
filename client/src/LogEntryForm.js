import React from 'react';
import { useForm } from "react-hook-form";

const LogEntryForm = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" required ref={register} />
            <label htmlFor="comments">Comments</label>
            <textarea name="title" rows={3} ref={register}></textarea>
            <label htmlFor="description">Description</label>
            <textarea name="description" rows={3} ref={register}></textarea>
            <label htmlFor="image">Image</label>
            <input type="text" name="image" />
            <label htmlFor="visitDate">Visit Date</label>
            <input type="date" name="visitDate" required ref={register} />
            <button>Create Entry</button>
        </form>
    )
}

export default LogEntryForm
