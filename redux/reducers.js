import { combineReducers } from 'redux'
import movieReducers from './movies/movieReducers'

const rootReducers = combineReducers({ movieReducers })

export default rootReducers
