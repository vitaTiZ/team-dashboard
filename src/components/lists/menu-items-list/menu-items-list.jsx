import React from "react"

export const MenuItemsList = ({items = ['home', 'about', 'portfolio']}) => {
  return items.map((item, i) => <div key={i}> {item}</div>)
}