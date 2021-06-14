import { connect } from 'react-redux'
import React, { useState,useEffect } from 'react'
import { addUser} from '../redux/action/action'
function mapStateToProps(state){
return{
    user:state.userReducer.user,
}
}
const mapDispatchToProps = (dispatch) => ({

    addUser: (newUser) => dispatch(addUser(newUser)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(function Form(props) {
   const {user,addUser}=props
   const [name,setName]=useState('')
   const [age,setAge]=useState('')
   const [city,setCity]=useState('')
   const [email,seteEmail]=useState('')
   const [phone,setePhone]=useState('')
//    useEffect(function () {
//     { }

//     return function Message() {
 
//       alert("אין נתונים בטופס!!!!")


//     }
// }, [])
    return(
        <div>
            <div>
            <div>
                <label>Name</label>
                <br></br>
                <input  value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
                 
            </div>
            <div>
                <label>Age</label>
                <br></br>
                <input value={age}
               
                    onChange={e => setAge(e.target.value)}
                ></input>
            </div>
            <div>
                <label>City</label>
                <br></br>
                <input value={city}
               
                    onChange={e => setCity(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Email</label>
                <br></br>
                <input value={email}
               
                    onChange={e => seteEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Phone</label>
                <br></br>
                <input value={phone}
               
                    onChange={e => setePhone(e.target.value)}
                ></input>
            </div>
      
            <button  onClick={()=>addUser({name:name,age:age,city:city,email:email,phone:phone}) }>add</button>
          
       
        </div> 
        </div>
    )

}
)