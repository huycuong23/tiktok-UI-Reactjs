import * as httpRequest from '~/utils/httpRequest';
import PropTypes from 'prop-types';

export const Suggest = async (q, type) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};
Suggest.propTypes = {
    q: PropTypes.string,
    type: PropTypes.string,
}
