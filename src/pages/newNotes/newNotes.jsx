import React, { useEffect, useState } from "react"
export const NewNotes = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [date, setDate] = useState('');
    const [currentId, setCurrentId] = useState(1)

    const handleSubmit = () => {
        if (title && description && date) {
            const AllNotes = JSON.parse(localStorage.getItem('masai-notes')) || []
            const newItem = {
                id: currentId,
                title,
                description,
                date,
                bookmark: false
            }
            AllNotes.push(newItem)
            localStorage.setItem('masai-notes', JSON.stringify(AllNotes))
            setIdValue()
            onDiscard()
        }
        else {
            return
        }
    }

    const onDiscard = () => {
        setTitle("")
        setDescription("")
        setDate("")
    }

    const setIdValue = () => {
        setCurrentId(prev => prev + 1)
        localStorage.setItem('last-id-value',currentId+1)
    }

    useEffect(() => {
        let lastValue = Number(localStorage.getItem('last-id-value')) || 1
        setCurrentId(lastValue)
    }, [])

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