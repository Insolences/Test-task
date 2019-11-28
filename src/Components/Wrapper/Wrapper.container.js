import { connect } from "react-redux";
import { Wrapper } from "./Wrapper";

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Wrapper);
