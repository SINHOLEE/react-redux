import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { increase, decrease } from './../modules/counter';
import { bindActionCreators } from 'redux';

// 왜! dispatch에 action 함수를 넘겨줄까? action 객체를 넘겨주는것이 아니라!?
// 그 이유: 액션객체 자체를 넘겨주면 오타나 실수가 발생할 수 있으므로!
const CounterContainer = () => {
  const number = useSelector(({ counter }) => counter.number);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => dispatch(increase()),
//   //  increase:dispatch({ type: INCREASE });
//   decrease: () => dispatch(decrease()),
//   //  decrease:dispatch({ type: DECREASE });
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   mapDispatchToProps,
// )(CounterContainer);

// connect 사용
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);

// Hooks 사용
export default CounterContainer;
