import React from "react"
import './header-title.scss'

export const HeaderTitle = ({logoUrl, title, subtitle}) => {
  return (
    <div className="header">
      <img src={logoUrl} alt="" />
      <div>
        <h3 id="title">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}