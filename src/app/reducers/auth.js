import {ADD_USER} from "../../constants";

const REPOS = [
    {
        id: 1,
        login: 'iapolly'
    },
    {
        id: 2,
        login: 'iapolly2'
    },
    {
        id: 3,
        login: 'iapolly3'
    }
];

const users = (state = REPOS, { id, login, type }) => {
    switch (type) {
        case ADD_USER:
            return [
                ...state, {
                    id: id,
                    login: login
                }
            ];
        default:
            return state;
    }
};

export default users;