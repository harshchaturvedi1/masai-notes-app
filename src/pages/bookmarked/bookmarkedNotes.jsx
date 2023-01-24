import React, { useEffect, useState } from "react";
import styles from "./bookmarked.module.css"
export const BookMarkedNotes=()=>{

    const [allnotes, setAllNotes] = useState([])

    const handleDelete = (id) => {
        const newItems = []
        const tempNotes =  JSON.parse(localStorage.getItem('masai-notes')) || []
        tempNotes.map(ele => {
            if (ele.id !== id)
                newItems.push(ele)
        })

        localStorage.setItem('masai-notes', JSON.stringify(newItems))
        setAllNotes([...newItems])

    }

    const handleBookmark = (id) => {
        const newItems = []

        const tempNotes =  JSON.parse(localStorage.getItem('masai-notes')) || []

        tempNotes.map(ele => {
            if (ele.id === id) {
                console.log(ele)
                ele.bookmark = false
                newItems.push(ele)
            }
            else
                newItems.push(ele)
        })

        localStorage.setItem('masai-notes', JSON.stringify(newItems))
        setAllNotes([...newItems])
    }

    useEffect(() => {
        const allItems = JSON.parse(localStorage.getItem('masai-notes')) || []
        const allBookmarks = []
        allItems.map(ele=>{
            ele.bookmark && allBookmarks.push(ele)
        })
        setAllNotes([...allBookmarks])
    }, [])

    return <>
    <div className={styles.allNotes}>All you bookmarked</div>
    {
            allnotes.length > 0 ? (<div>

                {
                    allnotes.map(ele => (
                      ele.bookmark &&  <div key={ele?.id} className={styles.notesWrapper}>
                            <div className={styles.notesmain}>

                                <div>{ele?.title}</div>
                                <div>{ele?.description}</div>
                                <div>{ele?.date}</div>
                            </div>
                            <div className={styles.notesButton}>
                                <button className={styles.redColor} onClick={() => handleDelete(ele.id)}>Delete</button>
                                <button onClick={() => handleBookmark(ele.id)}>Remove Bookmark</button>
                            </div>
                        </div>
                    ))
                }
            </div>) : <div className={styles.notFound}>No item found!</div>
        }
    </>
}