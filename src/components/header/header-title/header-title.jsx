import React from "react"
import './header-title.scss'

export const HeaderTitle = () => {
  return (
    <div id="logo">
      <span className="image avatar">
        <img src="https://via.placeholder.com/150" alt="" />
      </span>
      <h1 id="title">Jane Doe</h1>
      <p>Hyperspace Engineer</p>
    </div>
  )
}