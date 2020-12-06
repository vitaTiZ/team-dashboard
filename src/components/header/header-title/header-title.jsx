import React from "react"
import './header-title.scss'

export const HeaderTitle = ({logoUrl, title, subtitle}) => {
  return (
    <div className="header">
      <img src={logoUrl} alt="" />
      <div className="title">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}