const initialState = {
  selectedPKMN: JSON.parse(localStorage.getItem('selectedPKMN')) || []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_PKMN":
      return {
          selectedPKMN: [
            ...state.selectedPKMN,
            +action.payload
          ].sort( (a, b) => a - b )
        }
    case "DESELECT_PKMN":
      return {
        selectedPKMN: state.selectedPKMN.filter( id => id !== +action.payload )
      }
    case "CLEAR_PKMN":
      return {
        selectedPKMN: []
      }
    default:
      return state
  }
}

export default rootReducer
