import { createStore } from 'vuex'

export default createStore({
  state: {
    companyInformation: [
      { name: 'Forename', value: 'Oliver'},
      { name: 'Surname', value: 'James'},
      { name: 'Telephone', value: '0712 345 543'},
      { name: 'Email', value: 'user@vuex.com'},
    ],
    conditionals: {
      menuIsOpen: true,
    }
  },
  getters: {
    companyInformation: state => {
        let companyInformation = state.companyInformation.map( item => {
            return {
                name: item.name,
                value: '**' + item.value + '**'
            }
        });
        return companyInformation
    }
  },
  mutations: {
    addStringMutation: state => {
      state.companyInformation.forEach( item => {
        item.value = item.value + ' -- a string'
      })
    },
    addStringUniqueMutation: (state, payload) => {
      state.companyInformation.forEach( item => {
        item.value = item.value + ' - ' + payload
      })
    }
  },
  actions: {
    addStringAction: context => {
      context.commit('addStringMutation')
    },
    addStringUniqueAction: (context, payload) => {
      context.commit('addStringUniqueMutation', payload)
    }
  },
  modules: {
  }
})
