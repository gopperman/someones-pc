const initialState = {
  selectedPKMN: [1,4,10,14]
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_PKMN":
      return (!state.selectedPKMN.includes(action.payload)) ?
        Object.assign({}, state, {
          selectedPKMN: state.selectedPKMN.concat(action.payload)
        }) : state

    case "DESELECT_PKMN":
      return {
        selectedPKMN: state.selectedPKMN.filter( id => id !== +action.payload )
      }

    default:
      return state
  }
}

export default rootReducer
