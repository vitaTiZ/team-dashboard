import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

import "../../assets/scss/main.scss";

export default function Home() {

  return (
    <div>
      {/* <Link to="/about">go to about...</Link> */}

      <SidebarMenu />
      {/* <HomePage /> */}

    </div>
  )
}
