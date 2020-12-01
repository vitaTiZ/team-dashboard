import React from "react"
import { FooterSocial } from "../../footer/footer-social/footer-social"
import { HeaderTitle } from "../../header/header-title/header-title"
import { MenuItemsList } from "../../lists/menu-items-list/menu-items-list"

import "./sidebar-menu.scss"

export const SidebarMenu = () => {
    return (
      <div className='sidebar-menu'>

          <HeaderTitle
            logoUrl={'https://via.placeholder.com/50'}
            title={'SMTProject'}
            subtitle={'Where code happens...'}
          />
          <MenuItemsList />
          <FooterSocial />

      </div>
    )
}