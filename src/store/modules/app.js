// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: '仪表盘',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: '用户简介',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: '径流模拟',
      icon: 'mdi-waves',
      to: '/components/runoffsimulation/',
    },
    {
      title: '实时水情',
      icon: 'mdi-water-alert',
      to: '/components/wateralert/',
    },
    {
      title: '数据报告',
      icon: 'mdi-database-export',
      to: '/components/datareport/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/components/google/',
    },
    {
      title: '用户通知',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
