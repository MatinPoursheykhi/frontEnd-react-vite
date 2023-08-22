import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default (_status)=> {
    if(_status === 200 || _status === 201){
      toast.success('successful', {
        position: toast.POSITION.BOTTOM_LEFT
      })
    }
    else{
      toast.error('failed', {
        position: toast.POSITION.BOTTOM_LEFT
      })
    }
  }