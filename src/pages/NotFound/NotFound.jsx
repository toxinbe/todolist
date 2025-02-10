import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
const NotFound = () => {
  const navigate = useNavigate()
  const backHome = () => {
    navigate('/')
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='Xin lỗi, trang bạn truy cập không tồn tại.'
      extra={
        <Button onClick={backHome} type='primary'>
          Trang chủ
        </Button>
      }
    />
  )
}

export default NotFound
