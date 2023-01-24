import React, { useEffect, useState } from "react";
import styles from "./allNotes.module.css"

export const AllNotes = () => {

    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        const allItems = JSON.parse(localStorage.getItem('masai-notes')) || []
        setAllNotes([...allItems])
    }, [])


    const handleDelete = (id) => {
        console.log(id)
        const newItems = []
        allnotes.map(ele => {
            if (ele.id !== id)
                newItems.push(ele)
        })

        localStorage.setItem('masai-notes', JSON.stringify(newItems))
        setAllNotes([...newItems])

    }

    const handleBookmark = (id) => {
        const newItems = []
        allnotes.map(ele => {
            if (ele.id === id) {


                console.log(ele)
                ele.bookmark = true
                newItems.push(ele)
            }
            else
                newItems.push(ele)
        })

        localStorage.setItem('masai-notes', JSON.stringify(newItems))
        setAllNotes([...newItems])
    }

    return <div>
        <div className={styles.allNotes}>All Notes</div>
        {
            allnotes.length > 0 ? (<div>

                {
                    allnotes.map(ele => (
                        <div key={ele?.id} className={styles.notesWrapper}>
                            <div className={styles.notesmain}>

                                <div>{ele?.title}</div>
                                <div>{ele?.description}</div>
                                <div>{ele?.date}</div>
                            </div>
                            <div className={styles.notesButton}>
                                <button onClick={() => handleDelete(ele.id)} className={styles.redColor}>Delete</button>
                                <button onClick={() => handleBookmark(ele.id)} className={styles.greyColor}>Bookmark</button>
                            </div>
                        </div>
                    ))
                }
            </div>) : <div className={styles.notFound}> No item found!</div>
        }
    </div>
}