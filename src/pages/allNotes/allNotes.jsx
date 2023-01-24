import React, { useEffect, useState } from "react";
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
        <div>All Notes</div>
        {
            allnotes.length > 0 ? (<div>

                {
                    allnotes.map(ele => (
                        <div key={ele?.id}>
                            <div>

                                <div>{ele?.title}</div>
                                <div>{ele?.description}</div>
                                <div>{ele?.date}</div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(ele.id)}>Delete</button>
                                <button onClick={() => handleBookmark(ele.id)}>Bookmark</button>
                            </div>
                        </div>
                    ))
                }
            </div>) : <div>No item found!</div>
        }
    </div>
}