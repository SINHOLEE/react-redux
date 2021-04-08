import { createAction, createActions, handleActions } from 'redux-actions';

// export const INCREASE = 'counter/INCREASE';
// export const DECREASE = 'counter/DECREASE';

// // //action 함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// //action 함수
// export const increase = createAction('counter/INCREASE');
// export const decrease = createAction('counter/DECREASE');
//action 함수

// options쓰는 방법
const options = {
  prefix: 'counter',
  namespace: '--',
};
export const { increase, decrease } = createActions(
  {
    INCREASE: () => {},
    DECREASE: () => {},
  },
  options,
);
// initState
const initState = {
  number: 0,
};

// reducer
const counter = handleActions(
  {
    INCREASE: (state) => ({ ...state, number: state.number + 1 }),
    DECREASE: (state) => ({ ...state, number: state.number - 1 }),
  },
  initState,
  options,
);

// // reducer
// const counter = (state = initState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return { number: state.number + 1 };
//     case DECREASE:
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

export default counter;
