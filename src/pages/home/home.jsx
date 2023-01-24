import React from "react"
import { Link } from "react-router-dom"
import styles from "./home.module.css"
export const Home = () => {
    return <div>
        <div className={styles.heading}>Masai Notes App</div>
        <div className={styles.allRouters}>
            <Link to="/newnote">New note</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/allnotes">View All Notes</Link>
        </div>
    </div>
}