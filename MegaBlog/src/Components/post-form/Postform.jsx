import React,{useCallback} from 'react'
import services from '../../Appwrite/config';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Input,Button,Select} from '..';
function Postform({post}) {
    const {register,handleSubmit,}=useForm();
    return (
        <div>test</div>
    )
}

export default Postform
