import { useDispatch, useSelector } from 'react-redux'
import {show} from '../../Store/modal'
import cssClasses from './Card.module.scss'
const Card = (props)=>{
    const isAuth = useSelector(state=>state.authenticate.isAuth)
    const dispatch = useDispatch()
    return <div className = {cssClasses.Card}>
        <img onError = {e=>{e.target.src = window.location.origin+'/default.png'}} alt = '' src = {props.image?props.image:window.location.origin+'/default.png'}></img>
        <h3>{props.productName}</h3>
        <p>Rs {props.price}/-</p>
   
        <p style = {{textAlign:'start',marginTop:'5px',marginBottom:'5px'}}>Quantity Left: {props.quantity}</p>
        <hr></hr>
        {props.discription?<p style={{textAlign:'start'}}>{props.discription}</p>:<p>No Discription Available</p>}
        {isAuth&&<button onClick = {()=>{dispatch(show(props.prodId))}}>Edit</button>}

    </div>
}

export default Card