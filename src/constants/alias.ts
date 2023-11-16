interface IUrlRoutes {
  HOME: string,
  ERROR: string,
  SEARCH: string,
  CATEGORY: string,
  NEWS: string
}

export const urlRoutes: IUrlRoutes = {
  ERROR: '*',
  HOME: '/',
  SEARCH: '/search',
  CATEGORY: '/category/:title',
  NEWS: '/news/:id'
}