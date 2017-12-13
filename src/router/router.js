import App from '../App'

const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld')

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  }
]
