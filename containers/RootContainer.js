import { connect } from "react-redux";
import Counter from "../components/Counter";
import { PLUS_COUNTER, MINUS_COUNTER } from "../redux/actions";

// Counterをmapしている
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispachToProps(dipatch) {
  return {
    plus: () =>
      dipatch({
        type: PLUS_COUNTER,
      }),
    minus: () =>
      dipatch({
        type: MINUS_COUNTER,
      }),
  };
}

export default connect(mapStateToProps, mapDispachToProps)(Counter);
