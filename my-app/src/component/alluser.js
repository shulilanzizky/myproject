import React, { useEffect } from 'react';
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return { users: state.userReducer.users }
}
const mapDispatcToProps = (dispatch) => ({
    
    
})

export default connect(mapStateToProps, mapDispatcToProps)(function AllUser(props) {
    const { users} = props;
   
    return (
        <>
            <div >

                {users.map((item) =>
                    <div key={item.id} >
                        <div>שם:{item.name}</div>
                        <div>מייל:{item.email}</div>
                          
                    </div>

                )}
            </div>
        </>

    )
}

)
