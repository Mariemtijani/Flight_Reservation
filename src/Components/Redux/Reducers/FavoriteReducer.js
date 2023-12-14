import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  cities: [],
};

export default function FavoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'add':
      if (!state.cities.some(city => city.name === action.payload.name)) {
        const newCity = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          index: action.payload.index,
        };

        return {
          ...state,
          cities: [...state.cities, newCity],
        };
      } else {
        return state;
      }

      case 'delete':
      const cityToDeleteId = action.payload.id;
      const updatedCities = state.cities.filter(city => city.id !== cityToDeleteId);

      return {
        ...state,
        cities: updatedCities,
      };

    default:
      return state;
  }
}
