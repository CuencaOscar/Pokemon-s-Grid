
export const Board = () => {

  let row = 8

  let col = 15

  let tablero: number[] = []

  for (let i = 0; i < row * col; i++) {
    tablero.push(i)
  }

  return {
    tablero
  }
}

export const Positions = () => {

  let posiciones: number[] = []

  while (posiciones.length < 17) {

    let valor = Math.floor(Math.random() * (120 - 1)) + 1

    if (posiciones.includes(valor) === false) {
      posiciones.push(valor)
    }
  }

  return {
    posiciones
  }
}
