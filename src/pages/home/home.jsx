import React from "react"
import { Link } from "react-router-dom"
export const Home = () => {
    return <div>
        <h3>Masai Notes App</h3>
        <div>
            <Link to="/newnote">new note</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/allnotes">View All Notes</Link>
        </div>
    </div>
}