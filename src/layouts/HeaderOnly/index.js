import Header from "../components/Header";
import PropTypes from 'prop-types';

function HeaderOnly( {children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
     );
}
HeaderOnly.propTypes = {
    children: PropTypes.node,
}
export default HeaderOnly;