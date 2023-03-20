import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectExample,
} from "../app/redux-reducers/example.reducer";

export default function ReduxExample() {
  const example = useSelector(selectExample);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p>{example}</p>
      <button onClick={() => dispatch(increment())}>Test Redux</button>
    </div>
  );
}
