const selectPKMN = (payload) => {
  return { type: "SELECT_PKMN", payload }
}

const deselectPKMN = (payload) => {
  return { type: "DESELECT_PKMN", payload }
}

export {
  selectPKMN,
  deselectPKMN
}
