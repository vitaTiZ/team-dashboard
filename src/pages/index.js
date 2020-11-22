import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

export default function Home() {

  return (
    <div>
      <Link to="/about">go to about...</Link>

      <SidebarMenu />

    </div>
  )
}
