import { Menus, MenuEntry, HookMenu } from '@apisuite/extension-ui-types'

import { BASE_URI } from '../helpers/constants'

type MenuConfig = {
  [menu: string]: MenuEntry[]
}

const menuConfig: MenuConfig = {
  [Menus.HeaderAnonymousMain]: [
    {
      label: 'About Page',
      route: `${BASE_URI}/about`,
      title: 'About UI Ext. Page',
    },
  ],
  [Menus.HeaderAuthenticatedMain]: [
    {
      label: 'Authenticated Page',
      route: `${BASE_URI}/authenticated`,
      title: 'Authenticated UI Ext. Page',
    },
  ],
  [Menus.HeaderAuthenticatedDashboard]: [
    {
      label: 'About in Dashboard',
      route: '/dashboard',
      title: 'About in Dashboard',
    },
  ],
  [Menus.HeaderAuthenticatedProfile]: [
    {
      label: 'About in Profile',
      route: '/profile',
      title: 'About in Profile',
    },
  ],
  [Menus.FooterDashboard]: [
    {
      label: 'About Page',
      route: `${BASE_URI}/about`,
      title: 'About UI Ext. Page',
    },
  ],
}

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null
}

export default hookMenu
