import React, { useEffect, useState } from "react";

export const BookMarkedNotes=()=>{

    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        const allItems = JSON.parse(localStorage.getItem('masai-notes')) || []
        setAllNotes([...allItems])
    }, [])

    return <>
    <h3>All you bookmarked</h3>
    </>
}