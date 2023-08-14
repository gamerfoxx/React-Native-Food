import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
	ids: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
	const [favouriteIds, setFavouriteIds] = useState([]);

	function addFavourite(id) {
		setFavouriteIds((currentIds) => [...currentIds, id]);
	}
	function removeFavourite(id) {
		setFavouriteIds((currentIds) =>
			currentIds.filter((mealId) => mealId !== id)
		);
	}
	const value = {
		ids: favouriteIds,
		addFavourite: addFavourite,
		removeFavourite: removeFavourite,
	};

	return (
		<FavouritesContext.Provider value={value}>
			{children}
		</FavouritesContext.Provider>
	);
}

export default FavouritesContextProvider;
