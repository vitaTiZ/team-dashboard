import React from "react"
import { FooterSocial } from "../../footer/footer-social/footer-social"
import { HeaderTitle } from "../../header/header-title/header-title"
import { MenuItemsList } from "../../lists/menu-items-list/menu-items-list"

import "./sidebar-menu.scss"

export const SidebarMenu = () => {

		const logoUrl = 'https://via.placeholder.com/50';
		const title = 'SMTProject';
		const subtitle = 'Where code happens';

		const items = [
			{
				name: 'Chi siamo',
        icon: 'icon-plus',
        value: 'chi-siamo'
      },
      {
				name: 'Portfolio',
        icon: 'icon-hand-o-right',
        value: 'portfolio'
      },
      {
				name: 'Utlimi articoli',
        icon: 'icon-plus',
        value: 'ultimi-articoli'
      }
		]


    return (
      <div className='sidebar-menu'>

          <HeaderTitle
            logoUrl={logoUrl}
            title={title}
            subtitle={subtitle}
          />
          <MenuItemsList
            items={items}
          />
          <FooterSocial />

      </div>
    )
}