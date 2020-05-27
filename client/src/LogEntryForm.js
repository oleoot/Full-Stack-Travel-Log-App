import React from 'react';


const LogEntryForm = () => {
    return (
        <form className="entry-form">
            <label for="title">Title</label>
            <input type="text" name="title" required />
            <label for="comments">Comments</label>
            <textarea name="title" rows={3}></textarea>
            <label for="description">Description</label>
            <textarea name="description" rows={3}></textarea>
            <label for="image">Image</label>
            <input type="text" name="image" />
            <label for="visitDate">Visit Date</label>
            <input type="date" name="visitDate" />
        </form>
    )
}

export default LogEntryForm
