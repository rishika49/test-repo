import{ firestoreAction } from 'vuexfire'

export const state = () => ({
//counter : ['0', '1', '2'] ,
//counter123 : ['3','4','5'],
counter : 0

})

export const action = {
      inc({ commit }, payload) {
          console.log('payload', payload)
          console.log(commit)
      },
      readData: firestoreAction(async (context, payload) => {
        console.log('payload', payload)
        console.log('state',context)
      }),
}

export const getters = {
  counter(state) {
      return state.counter
  },

  // counter123(state){
  //    return state.counter123
  // },
}
