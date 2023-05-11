import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

// eslint-disable-next-line react/prop-types
export default function FavoritesProvider ({ children }) {
    const [ favorite, setFavorite] = useState([])

    return (
      <FavoritesContext.Provider value={{ favorite, setFavorite }} >
        { children }
      </FavoritesContext.Provider>
    );
}

// hook personalizado 

// eslint-disable-next-line react-refresh/only-export-components
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext)


  function addFavorite(newFavorite) {
    // verificar se tem o item favorito repetido;
    const reapeatedFavorite = favorite.some((item)=> item.id === newFavorite.id)

    // nova lista recebe lista anterior ;

    let newList = [...favorite]

    // verificar se nao tem repedido e adicionar o item na lista de favoritos;

    if(!reapeatedFavorite) {
      newList.push(newFavorite)
      return setFavorite(newList)
    }

    // se for repetido, ele vai ser retirado da lista;

    newList = favorite.filter((fav)=> fav.id !== newFavorite.id)

    return setFavorite(newList)

  }

  return {
    favorite,
    addFavorite
  }

}