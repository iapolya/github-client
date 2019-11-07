import {ADD_USER} from "../../constants";

export default addUser = (id, login) => ({
    type: 'ADD_USER',
    id,
    login
});