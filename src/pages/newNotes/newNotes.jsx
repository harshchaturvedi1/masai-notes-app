import React, { useState } from "react"
export const NewNotes = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [date, setDate] = useState('')

    const handleSubmit = () => {
        if (title && description && date) {

            const AllNotes = JSON.parse(localStorage.getItem('masai-notes')) || []

            console.log("title", title)
            console.log("description", description)
            console.log("date", date)

            const newItem={
                id:`${AllNotes.length + 1}`,
                title,
                description,
                date
            }
            AllNotes.push(newItem)

            localStorage.setItem('masai-notes', JSON.stringify(AllNotes))
        }
        else {
            return
        }
    }

    const onDiscard =()=>{
        setTitle("")
        setDescription("")
        setDate("")
    }

    return <div>
        <div>Add a new Note</div>
        <div>
            <div><input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} /></div>
            <div>
                <textarea cols="30" rows="10" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div><input type="date" value={date} placeholder="title" onChange={(e) => setDate(e.target.value)} /></div>

        </div>
        <div>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={onDiscard}>Discard</button>

        </div>
    </div>
}