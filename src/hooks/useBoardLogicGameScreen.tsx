import React from 'react';
import { useState } from "react"
import { Image, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Board, Positions } from '../components/Board_PositionsGameScreen';

const useBoardLogicGameScreen = () => {

  const [tablero, setTablero] = useState<number[]>(Board().tablero)

  const [posiciones, setPosiciones] = useState<number[]>(Positions().posiciones)

  const [score, setScore] = useState<number>(0)

  const [ash, setAsh] = useState<number>(6)

  const [level, setLevel] = useState<number>(1)

  const [visitado, setVisitado] = useState<number[]>([0])

  const [i, setI] = useState<number>(0)

  const [j, setJ] = useState<number>(0)

  const [jugador, setJugador] = useState<number>(0)

  const {width, height} = useWindowDimensions()

  let valorFilasIzquierda = [0, 15, 30, 45, 60, 75, 90, 105]

  let valorFilasIzquierdaV = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112]

  let valorFilasDerecha = [14, 29, 44, 59, 74, 89, 104, 119]

  let valorFilasDerechaV = [7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 87, 95, 103, 111]

  let valorColumnasSuperior = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  let valorColumnasSuperiorV = [0, 1, 2, 3, 4, 5, 6, 7]

  let valorColumnasInferior = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]

  let valorColumnasInferiorV = [112, 113, 114, 115, 116, 117, 118, 119]

  const TurnRight = () => {
    if (width > 600) {
      if (!valorFilasDerecha.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador + 1)) {
          posiciones[posiciones.indexOf(jugador + 1)] = 200
          setJugador(jugador + 1)
          setJ(j + 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador + 1])
        }
        else {
          setJugador(jugador + 1)
          setJ(j + 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador + 1])
        }
      }
    } else {
      if (!valorFilasDerechaV.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador + 1)) {
          posiciones[posiciones.indexOf(jugador + 1)] = 200
          setJugador(jugador + 1)
          setJ(j + 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador + 1])
        }
        else {
          setJugador(jugador + 1)
          setJ(j + 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador + 1])
        }
      }
    }
  }

  const TurnLeft = () => {
    if (width > 600) {
      if (!valorFilasIzquierda.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador - 1)) {
          posiciones[posiciones.indexOf(jugador - 1)] = 200
          setJugador(jugador - 1)
          setJ(j - 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador - 1])
        } else {
          setJugador(jugador - 1)
          setJ(j - 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador - 1])
        }
      }
    }
    else {
      if (!valorFilasIzquierdaV.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador - 1)) {
          posiciones[posiciones.indexOf(jugador - 1)] = 200
          setJugador(jugador - 1)
          setJ(j - 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador - 1])
        } else {
          setJugador(jugador - 1)
          setJ(j - 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador - 1])
        }
      }
    }
  }

  const TurnDown = () => {
    if (width>600) {
      if (!valorColumnasInferior.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador + 15)) {
          posiciones[posiciones.indexOf(jugador + 15)] = 200
          setJugador(jugador + 15)
          setI(i + 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador + 15])
        }
        else {
          setJugador(jugador + 15)
          setI(i + 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador + 15])
        }
      }
    }
    else {
      if (!valorColumnasInferiorV.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador + 8)) {
          posiciones[posiciones.indexOf(jugador + 8)] = 200
          setJugador(jugador + 8)
          setI(i + 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador + 8])
        }
        else {
          setJugador(jugador + 8)
          setI(i + 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador + 8])
        }
      }
    }
  }

  const TurnUp = () => {
    if (width>600){
      if (!valorColumnasSuperior.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador - 15)) {
          posiciones[posiciones.indexOf(jugador - 15)] = 200
          setJugador(jugador - 15)
          setI(i - 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador - 15])
        } else {
          setJugador(jugador - 15)
          setI(i - 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador - 15])
        }
      }
    }
    else {
      if (!valorColumnasSuperiorV.includes(jugador)) {
        if (posiciones.slice(6, 12).includes(jugador - 8)) {
          posiciones[posiciones.indexOf(jugador - 8)] = 200
          setJugador(jugador - 8)
          setI(i - 1)
          setScore(score + 100)
          setAsh(ash - 1)
          setVisitado([...visitado, jugador - 8])
        } else {
          setJugador(jugador - 8)
          setI(i - 1)
          setScore(score - 10)
          setVisitado([...visitado, jugador - 8])
        }
      }
    }
  }

  const restart = () => {
    setPosiciones(Positions().posiciones)
    setVisitado([0])
    setJugador(0)
    setI(0)
    setJ(0)
    setAsh(6)
  }

  const NextLevel = () => {
    restart()
    setLevel(level + 1)
  }

  const GameOver = () => {
    restart()
    setLevel(1)
    setScore(0)
  }

  return {
    i, j, visitado, tablero, posiciones, score, ash, valorFilasIzquierda, valorFilasDerecha, valorFilasIzquierdaV, valorFilasDerechaV, level, jugador, TurnRight, TurnLeft, TurnUp, TurnDown, NextLevel, GameOver
  }
}

export default useBoardLogicGameScreen;