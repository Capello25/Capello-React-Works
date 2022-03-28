import React,{Component} from 'react'

class ClassForm extends Component{
render(){
    return(
        <div>
            <form>
            <label className='lb1form'>Name</label><br/>
            <input type='text' placeholder='Enter Name Here'style={{width:'50%'}}/><br/>
            <label className='lb1form'>Email</label><br/>
            <input type='text' placeholder='Enter Email Here' style={{width:'50%'}}/><br/>
            <label className='lb1form'>Password</label><br/>
            <input type='text' placeholder='Enter Password Here' style={{width:'50%'}}/><br/>
            <button>Submit</button>
            </form>
        </div>
    )
}
}
export default ClassForm