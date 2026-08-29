export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function createSeededRandom(seed) {
  let state = seed >>> 0
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 0xffffffff
  }
}

function seededInt(random, min, max) {
  return Math.floor(random() * (max - min) + min)
}

export function createCubeParticles(count, seed) {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    size: seededInt(random, 0, 10),
    percentage: seededInt(random, 1, 100),
    delay: seededInt(random, 0, 15),
  }))
}

export function createStarParticles(count, seed) {
  const random = createSeededRandom(seed)
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    bottom: seededInt(random, 0, 100),
    left: seededInt(random, 0, 100),
    delay: seededInt(random, 0, 15),
  }))
}
