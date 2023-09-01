import * as httpRequest from '~/utils/httpRequest';
import PropTypes from 'prop-types';

export const search = async (q, type) => {
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
search.propTypes = {
    q: PropTypes.string,
    type: PropTypes.string,
}
