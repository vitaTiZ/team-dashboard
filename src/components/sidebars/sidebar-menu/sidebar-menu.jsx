import React from "react"
import { FooterSocial } from "../../footer/footer-social/footer-social"
import { HeaderTitle } from "../../header/header-title/header-title"
import { MenuItemsList } from "../../lists/menu-items-list/menu-items-list"

export const SidebarMenu = () => {
    return (
      <div>
        <header>
          <HeaderTitle />
        </header>
        <main>
          <MenuItemsList />
        </main>
        <footer>
          <FooterSocial />
        </footer>
      </div>
    )
}