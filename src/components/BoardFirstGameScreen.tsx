import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import useBoardLogicGameScreen from '../hooks/useBoardLogicGameScreen';
import { Positions, Board } from './Board_PositionsGameScreen';

interface Props {
  name: string,
  i: number,
  j: number,
  visitado: number[],
  tablero: number[],
  posiciones: number[]
}

const BoardFirstGameScreen = ({ name, i, j, visitado, tablero, posiciones }: Props) => {

  const { valorFilasDerecha, valorFilasIzquierda, valorFilasIzquierdaV, valorFilasDerechaV } = useBoardLogicGameScreen()

  const {width, height} = useWindowDimensions()

  const secondBoard = (numero: number) => {
    if (!visitado.includes(numero) && !posiciones.slice(6, 12).includes(numero)) {
      return (
        <View
          key={numero.toString()}
          style={{ ...styles.cuadrados }}>
          <Image
            style={{ ...styles.originalImage }}
            source={require('../assets/Bloque2.png')}
          />
        </View>
      )
    } else {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
        </View>
      )
    }
  }

  const firstBoard = (numero: number) => {
    if (posiciones.slice(0, 6).includes(numero)) {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <Image
            style={{ ...styles.originalImage, position: 'absolute', width: 30, height: 30 }}
            source={require('../assets/rocket.png')}
          />
        </View>
      )
    }
    else if (posiciones.slice(6, 12).includes(numero)) {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <Image
            style={{ ...styles.originalImage, position: 'absolute', width: 30, height: 30 }}
            source={require('../assets/ash.png')}
          />
        </View>
      )
    }
    else if (posiciones.slice(12, 17).includes(numero)) {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <Image
            style={{ ...styles.originalImage, position: 'absolute', width: 20, height: 20 }}
            source={require('../assets/pokeball.png')}
          />
        </View>
      )
    }
    else if (
      (
        (posiciones.slice(12, 17).includes(numero - 1) && posiciones.slice(0, 6).includes(numero + 1) || (posiciones.slice(0, 6).includes(numero - 1) && posiciones.slice(12, 17).includes(numero + 1))) && ( (width > 600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1)) && ( (width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1))
      )
      ||
      (
        (posiciones.slice(0, 6).includes(numero + 1) && ( (width > 6000) ? posiciones.slice(12, 17).includes(numero + 15) : posiciones.slice(12, 17).includes(numero + 8)) || (posiciones.slice(12, 17).includes(numero + 1) && ( (width > 600) ? posiciones.slice(0, 6).includes(numero + 15) : posiciones.slice(0, 6).includes(numero + 8)))) && ((width > 600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1)) && ( (width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1))
      )
      ||
      (
        (posiciones.slice(0, 6).includes(numero - 1) && ((width > 600) ? posiciones.slice(12, 17).includes(numero - 15) : posiciones.slice(12, 17).includes(numero - 8)) || (posiciones.slice(12, 17).includes(numero - 1) && ((width > 600) ? posiciones.slice(0, 6).includes(numero - 15) : posiciones.slice(0, 6).includes(numero - 8)))) && ((width > 600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1)) && ((width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1))
      )
      ||
      (
        (posiciones.slice(0, 6).includes(numero - 1) && ((width> 600) ? posiciones.slice(12, 17).includes(numero + 15) : posiciones.slice(12, 17).includes(numero + 8)) || (posiciones.slice(12, 17).includes(numero - 1) && ( (width>600) ? posiciones.slice(0, 6).includes(numero + 15) : posiciones.slice(0, 6).includes(numero + 8)))) && ((width > 600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1)) && ((width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1))
      )
      || (
        (((width> 600) ? posiciones.slice(0, 6).includes(numero - 15) : posiciones.slice(0, 6).includes(numero - 8)) && ((width>600) ? posiciones.slice(12, 17).includes(numero + 15) : posiciones.slice(12, 17).includes(numero + 8)) || (((width>600) ? posiciones.slice(12, 17).includes(numero - 15) : posiciones.slice(12, 17).includes(numero - 8)) && ((width>600) ? posiciones.slice(0, 6).includes(numero + 15) : posiciones.slice(0, 6).includes(numero + 8))))
      )
      ||
      (
        (posiciones.slice(0, 6).includes(numero + 1) && ((width>600) ? posiciones.slice(12, 17).includes(numero - 15) : posiciones.slice(12, 17).includes(numero - 8)) || (posiciones.slice(12, 17).includes(numero + 1) && ((width>600) ? posiciones.slice(0, 6).includes(numero - 15) : posiciones.slice(0, 6).includes(numero - 8)))) && ((width>600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1)) && ((width>600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1))
      )
    ) {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 5, fontWeight: 'bold', color: 'white' }}>Pokeball</Text>
            <Text style={{ fontSize: 5, fontWeight: 'bold', color: 'white' }}>Rocket</Text>
          </View>
        </View>
      )
    }
    else if ((posiciones.slice(0, 6).includes(numero - 1) && ((width>600) ? !valorFilasDerecha.includes(numero - 1) : !valorFilasDerechaV.includes(numero - 1))) || (posiciones.slice(0, 6).includes(numero + 1) && ( (width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1) )) || ( (width> 600 ) ? posiciones.slice(0, 6).includes(numero + 15) : posiciones.slice(0, 6).includes(numero + 8)) || ( (width> 600) ? posiciones.slice(0, 6).includes(numero - 15): posiciones.slice(0, 6).includes(numero - 8) ))  {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 5, fontWeight: 'bold', color: 'white' }}>Rocket</Text>
          </View>
        </View>
      )
    }
    // else if ((posiciones.slice(6, 12).includes(numero - 1) && !valorFilasDerecha.includes(numero - 1)) || (posiciones.slice(6, 12).includes(numero + 1) && !valorFilasIzquierda.includes(numero + 1)) || posiciones.slice(6, 12).includes(numero + 15) || posiciones.slice(6, 12).includes(numero - 15)) {
    //   return (
    //     <View
    //       key={numero.toString()}
    //       style={{ ...styles.cuadrados }}>
    //       <Image
    //         style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
    //         source={require('../assets/Bloque.png')}
    //       />
    //       <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }}>
    //         <Text style={{ fontSize: 5, fontWeight: 'bold', color: 'white' }}>Ash</Text>
    //       </View>
    //     </View>
    //   )
    // }
    else if ((posiciones.slice(12, 17).includes(numero - 1) && !valorFilasDerecha.includes(numero - 1)) || (posiciones.slice(12, 17).includes(numero + 1) && ( (width > 600) ? !valorFilasIzquierda.includes(numero + 1) : !valorFilasIzquierdaV.includes(numero + 1) )) || ( (width> 600 ) ? posiciones.slice(12, 17).includes(numero + 15) : posiciones.slice(12, 17).includes(numero + 8)) || ( (width> 600) ? posiciones.slice(12, 17).includes(numero - 15): posiciones.slice(12, 17).includes(numero - 8) )) {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage, position: 'absolute', zIndex: 0 }}
            source={require('../assets/Bloque.png')}
          />
          <View style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 5, fontWeight: 'bold', color: 'white' }}>Pokeball</Text>
          </View>
        </View>
      )
    }
    else {
      return (
        <View
          key={numero.toString()}
          style={styles.cuadrados}>
          <Image
            style={{ ...styles.originalImage }}
            source={require('../assets/Bloque.png')} //Cambiar por bloque2
          />
        </View>
      )
    }
  }

  return (
    <View style={{ width: (width > 600) ? 600 : 320 , height: (width > 600) ? 320 : 600 }}>
      <View style={{ ...styles.containerdos, position: 'absolute', zIndex: 1 }}>
        {
          tablero.map(firstBoard)
        }
      </View>
      <View style={{ ...styles.containerdos, position: 'absolute', zIndex: 2 }}>
        {
          tablero.map(secondBoard)
        }
      </View>
      <View style={{ ...styles.cuadrados, position: 'absolute', zIndex: 3 }}>
        <Image
          style={{ ...styles.cuadrados, ...styles.originalImage, left: j * 40, top: i * 40 }}
          source={{ uri: `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front/${name}.gif` }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerdos: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute'
  },
  cuadrados: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  originalImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  }
})

export default BoardFirstGameScreen;