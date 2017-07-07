import {REHYDRATE} from 'redux-persist/constants'
import Tx from "../services/tx"


const initState = {
}

const txs = (state=initState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      var loadedTxs = action.payload.txs
      var txs = {}
      Object.keys(loadedTxs).forEach((hash) => {
        var tx = loadedTxs[hash]
        txs[hash] = new Tx(
          tx.hash,
          tx.from,
          tx.gas,
          tx.gasPrice,
          tx.nonce,
          tx.status,
          tx.source,
          tx.sourceAmount,
          tx.dest,
          tx.minConversionRate,
          tx.recipient,
          tx.maxDestAmount
        )
      })
      return txs
    }
    case "TX_ADDED": {
      var newState = {...state}
      newState[action.payload.hash] = action.payload
      return newState
    }
    case "UPDATE_TX_FULFILLED": {
      var newState = {...state}
      newState[action.payload.hash] = action.payload
      return newState
    }
  }
  return state
}

export default txs
