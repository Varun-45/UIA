import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    <b>UIA</b>
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a href="/" >Home</a>
                <a href="/record1">Patient's list</a>
                <a href="/record2">Retest list</a>

            </div>
        </div>
    )
}

export default Navbar