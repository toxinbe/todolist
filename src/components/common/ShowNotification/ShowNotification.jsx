import React from 'react'
import { notification } from 'antd'
const ShowNotification = () => {
  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
    })
  }
  return { contextHolder ,openNotificationWithIcon }
}

export default ShowNotification
