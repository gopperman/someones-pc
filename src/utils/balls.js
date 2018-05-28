import balls from '../data/balls.json'

/**
 * Gets a list of all of the ball types, compatible with table headers
 * @return {array} an array of balls
 */
const getBallHeaders = () => {
  return balls.map((ball) => {
    return {
      key: ball.id,
      type: 'ball',
      url: `balls/${ball.id}.png`,
      alt: ball.displayName
    }
  })
}

export {
  getBallHeaders
}
