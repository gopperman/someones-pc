const selectPKMN = (payload) => {
  return { type: "SELECT_PKMN", payload }
}

const deselectPKMN = (payload) => {
  return { type: "DESELECT_PKMN", payload }
}

const clearPKMN = () => {
  return { type: "CLEAR_PKMN"}
}

export {
  selectPKMN,
  deselectPKMN,
  clearPKMN
}
