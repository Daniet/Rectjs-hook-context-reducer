import React, {
  createContext,
  useReducer,
} from 'react';

export const CardStoreContext = createContext({})

const initialState = {
  cards: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addCard':
      return { cards: [...state.cards, action.payload] }
    default: throw new Error('Action type must be defiend')
  }
}

const CardStore = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState)
  return <CardStoreContext.Provider value={[state, dispach]}>
    {children}
  </CardStoreContext.Provider>
}

export default CardStore
