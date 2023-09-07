import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedUser } from '../../redux/actions/authAction'

const ProfileHook = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getLoggedUser())
  },[])

  const res=useSelector(state=>state.authReducer.currentUser)

  let item=[]
  try {
    if(res.data)
    item=res.data
    else
    item=[]
    
  } catch (error) {
    console.log(error);
  }

  return [item]
}

export default ProfileHook
