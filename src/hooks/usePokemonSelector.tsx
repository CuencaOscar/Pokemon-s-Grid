import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi'
import { PokemonSelectorResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonSelector = () => {

  const [isLoading, setIsLoading] = useState(true)

  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([])

  const nextPokemonId = useRef('https://pokeapi.co/api/v2/pokemon/?limit=1')

  const loadPokemon = async () => {
    setIsLoading(true)
    const resp = await pokemonApi.get<PokemonSelectorResponse>(nextPokemonId.current)
    if (Number(nextPokemonId.current.split('=')[1][0]) >= 0) {
      mapPokemonList(resp.data.results)
    } else {
      nextPokemonId.current = resp.data.previous as any
    }
  }

  const loadNextPokemon = async () => {
    const resp = await pokemonApi.get<PokemonSelectorResponse>(nextPokemonId.current)
    nextPokemonId.current = resp.data.next
    loadPokemon()

  }

  const loadPreviousPokemon = async() => {
    const resp = await pokemonApi.get<PokemonSelectorResponse>(nextPokemonId.current)
    if (Number(nextPokemonId.current.split('=')[1][0]) > 0) {
      nextPokemonId.current = resp.data.previous as any
      loadPokemon()
    }
  }

  const mapPokemonList = (pokemonList: Result[]) => {

    const newPokemon: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length - 2]
      // const picture = `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front/${ name }.gif`
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      // const picture = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${name}.gif`
      return {
        id,
        picture,
        name
      }
    })
    setSimplePokemon([...newPokemon])
    setIsLoading(false)
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return {
    isLoading,
    simplePokemon,
    loadNextPokemon,
    loadPreviousPokemon,
  }
}

export default usePokemonSelector;