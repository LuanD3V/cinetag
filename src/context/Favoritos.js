import { createContext, useContext, useState } from "react";

export const FavoritosConxtext = createContext();
FavoritosConxtext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosConxtext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosConxtext.Provider>
  );
}

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosConxtext);

  function addFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }
  return {
    favorito,
    addFavorito,
  };
}
