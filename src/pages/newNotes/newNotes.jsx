import React, { useEffect, useState } from "react"
import styles from "./newNotes.module.css"
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

    return <div className={styles.mainWrapper}>
        <div className={styles.pageTitle}>Add a new Note</div>
        <div className={styles.notesWrapper}>
            <div className={styles.title}><input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} /></div>
            <div className={styles.desc}>
                <textarea cols="30" rows="5" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className={styles.date}><input type="date" value={date} placeholder="title" onChange={(e) => setDate(e.target.value)} /></div>

        </div>
        <div className={styles.allButton}>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={onDiscard}>Discard</button>

        </div>
    </div>
}