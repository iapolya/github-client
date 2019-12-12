const initialState = {
    user: {
        login: 'iapolly'
    },
    loggedIn: false
};

const users = (state = initialState, { user, type }) => {
    switch (type) {
        case 'LOGIN':
            return {
                user: user,
                loggedIn: true
            };
        case 'LOGOUT':
            return {
                user: {},
                loggedIn: false
            };
        default:
            return state;
    }
};

export default users;