import { useEffect, useState } from "react"
import UserGrid from "../grids/userGrid"
import UserForm from "../forms/userForm"
import callApi from '../configs/requestApi.config'
import { ToastContainer } from 'react-toastify';
import Tostify from "../functions/toastify"


export default function UserTemplate() {
  const [formStatus, setFormStatus] = useState('hide')
  const [data, setData] = useState([])
  const [userInfo, setUserInfo] = useState({})

  const getUserList = () => {
    callApi('get', `users/`)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err);
      })
  }
  const addOrEdit = (data) => {
    let method = 'post', url = `users/`

    if (formStatus === 'edit')
      method = 'put', url += data.id

    callApi(method, url, data)
      .then((result) => {
        Tostify(result.status)
      }).catch(() => {
        Tostify(500)
      })
      .finally(() => {
        getUserList()
        setFormStatus('hide')
      })
  }
  const deleteUser = (_userInfo) => {
    callApi('delete', `users/${_userInfo.id}`)
      .then((result) => {
        Tostify(result.status)
      }).catch(() => {
        Tostify(500)
      })
      .finally(() => {
        getUserList()
      })
  }
  const getUserInfo = (_userInfo) => {
    callApi('get', `users/${_userInfo.id}`)
      .then((response) => {
        if (response.data) {
          setUserInfo(response.data)
          setFormStatus('edit')
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => { getUserList() }, [])
  return (
    <>
      <div className="flex justify-end px-3">
        <button className="mt-4 rounded-md btn"
          onClick={() => setFormStatus('add')}>AddUser</button>
      </div>
      <UserGrid data={data} getUserInfo={getUserInfo} deleteUser={deleteUser} />
      {
        formStatus !== 'hide' ?
          <UserForm userInfo={userInfo}
            addOrEdit={addOrEdit}
            setFormStatus={setFormStatus}
            formStatus={formStatus} /> :
          <></>
      }
      <ToastContainer />
    </>
  )
}