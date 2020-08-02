import TabReviews from './tab-reviews';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  reviews: state[NameSpace.REVIEWS].reviews,
});


export default connect(mapStateToProps)(TabReviews);
