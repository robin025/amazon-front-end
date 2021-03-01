export const initialState = {
  basket: [],
  user: null,
};

export const getbasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
    
      let newbasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItems) => basketItems.id === action.id
      );
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as its not in the basket`
        );
      }
      return { ...state, basket: newbasket };
      break;
    default:
      return state;
  }
};

export default reducer;
