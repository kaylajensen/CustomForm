import {
  combineReducers
} from 'redux';
import {
  UPDATE_USER_INFO
} from '../actions/actions';

let initialState = {
  user : {
    username : "kaylajensen",
    firstName : "Kayla",
    lastName : "Jensen",
    phone : "+15632715195",
    workoutCount : 0,
    allTimeWorkoutCount : 0
  }
}

function updateUserInfo(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {...state, [action.name] : action.info}
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  updateUserInfo
},initialState)

export default rootReducer
