
import produce from 'immer'
const initialstate = {
    users: [],
 
}
export default produce((state, action) => {

    switch (action.type) {
        case 'ADD USER':
            {
               debugger
                console.log("add user")
                state.users.push(action.payload)
               debugger
                break;
            }
            // case 'GETT ALL USER':
            // {
            //    debugger
            //     console.log("add user")
            //     state.users.find(action.payload)
            //    debugger
            //     break;
            // }
          
    }
   
}, initialstate)
