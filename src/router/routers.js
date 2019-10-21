import wy from '@src/library'

const renderMenuRoutes = () => {
  const loopMenuTree = (menuTree, routes = []) => {
    menuTree.forEach(menu => {
      if (menu.hasOwnProperty('children')) {
        return loopMenuTree(menu.children, routes)
      } else {
        routes.push({
          path: menu.path,
          name: menu.name,
          component: () => import(`@src/${menu.component}`)
        })
      }
    })

    return routes
  }

  const menuTree = wy.util.toTree(wy.config.MENUS, 'id', 'parentId', 'children')

  return loopMenuTree(menuTree)
}

const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('@src/components/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@src/components/Login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@src/components/layout/Index.vue'),
    children: renderMenuRoutes()
  },

  {
    path: '*',
    name: 'notFound',
    component: () => import('@src/components/NotFound.vue')
  }
]

export default routers
