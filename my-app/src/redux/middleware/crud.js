import axios from 'axios';
export const addUser = ({ dispatch, getState }) => next => action => {
    let newUser
    if (action.type === 'ADD USER') {
        axios.post('http://localhost:4200/createUser', action.payload)
            .then(res => {
                console.log(res.data);
                newUser = res.data
                dispatch(addUser(newUser))
            })
    }
    return next(action)
}

// export const getAllusers = ({ dispatch, getState }) => next => action => {
//     let allPosts
//     if (action.type === 'GET ALL USERS') {
//         axios.get('http://localhost:4200/getAllUser')
//             .then(res => {
//                 console.log(res.data);
//                 allUser = res.data
//                 dispatch(getAllUser(allUser))
//             })
//     }
//     return next(action)
// }
