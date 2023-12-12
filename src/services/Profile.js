import * as httpRequest from '~/utils/httpRequest';
import PropTypes from 'prop-types';

export const Profile = async (q) => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q
            },
        });
        return res.data;
    } catch (error) {
        console.log("error");
    }
};
Profile.propTypes = {
    q: PropTypes.string,
}