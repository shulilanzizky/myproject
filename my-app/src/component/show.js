import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
function mapStateToProps(state) {
    return { users: state.userReducer.users }
}
const mapDispatcToProps = (dispatch) => ({
    
    
})

export default connect(mapStateToProps, mapDispatcToProps)(function Show(props) {
    const { users} = props;
    const userFinish=users[users.length-1]
  const len=users.length;
  
    return (
        <>
       <div >
       {len>0?
               <p>  שלום שמי {userFinish.name} 
                     ואני בן {userFinish.age}
                      אני מ {userFinish.city}
                     המייל שלי הוא {userFinish.email}
                    הפלאפון שלי הוא {userFinish.phone}
               </p>
:
<p>שלום שמי שם מלא ואני בן גיל מעיר המייל שלי הוא  מייל והפלאפון שלי הוא פלאפון</p>
         }

         {/* <p>שלום שמי {userFinish.name} ואני בן {userFinish.age} מ {userFinish.city}  המייל שלי הוא  {userFinish.email}  והפלאפון שלי הוא {userFinish.phone} </p> */}
              
          
            
               
            
         
            </div>
        </>

    )
}

)
