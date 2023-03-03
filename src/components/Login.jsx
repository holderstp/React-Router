
import img1 from '../static/img1.png';
import img2 from '../static/img2.png';
import React from 'react';

/*class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className='flex px-20 py-10'>
            <header>
              <p className='text-xl text-[#172B4D] text-bold font-bold'> Quản lý đồ án</p>
            </header>
            <div className='flex-flex-col  pt-[200px] space-y-4  pl-[200px] w-[500px]'>
              <p className='text-3xl text-blue-600 text-bold font-bold '> Đăng nhập</p>
              <p > Tài khoản</p>
              <div>
                <input placeholder='Tài khoản' className='rounded-md border w-full '></input>
              </div>
              <p > Mật khẩu</p>
              <div>
                <input placeholder='Mật khẩu' className='rounded-md border w-full'></input>
               
              </div>
              <button type='button' className='bg-blue-500 w-full border rounded-md text-white  text-bold h-10'> Đăng nhập</button>
             
      
            </div>
            <div >
            <img src={img1} width="650px" height="50px" className='fixed top-0 right-0'/>
            <img src={img2} width="800px" height="500px" className='fixed bottom-0 right-10'/>
            </div>
            
          </div>
        )
    }
}
export default login;
*/
const login= ()=>{
  return (
    <div className='flex px-20 py-10'>
            <header>
              <p className='text-xl text-[#172B4D] text-bold font-bold'> Quản lý đồ án</p>
            
            </header>
            <div className='flex-flex-col  pt-[200px] space-y-4  pl-[200px] w-[500px]'>
              <p className='text-3xl text-blue-600 text-bold font-bold '> Đăng nhập</p>
              <p > Tài khoản</p>
              <div>
                <input placeholder='Tài khoản' className='rounded-md border w-full '></input>
              </div>
              <p > Mật khẩu</p>
              <div>
                <input placeholder='Mật khẩu' className='rounded-md border w-full'></input>
               
              </div>
              <button type='button' className='bg-blue-500 w-full border rounded-md text-white  text-bold h-10'> Đăng nhập</button>
             
      
            </div>
            <div >
            <img src={img1} width="650px" height="50px" className='fixed top-0 right-0'/>
            <img src={img2} width="800px" height="500px" className='fixed bottom-0 right-10'/>
            </div>
            
          </div>

  )
}
export default login;