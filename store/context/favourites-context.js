import { createContext } from 'react';

const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
	return <FavouritesContext.Provider>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
