import React, { useEffect, useState } from "react";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import ShowNotification from "../../components/common/ShowNotification/ShowNotification";
import axiosInstance from "../../utils/axiosConfig";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

const TODO_STATUS = {
  ACTIVE: 1,
  COMPLETED: 2,
};
const DATE_FORMAT = {
  DATA: "YYYY-MM-DDTHH:mm:ss",
  VIEW: "DD/MM/YYYY",
  VIEW_FULL: "DD/MM/YYYY HH:mm:ss",
};
function Todo() {
  const { contextHolder, openNotificationWithIcon } = ShowNotification();
  const [todoList, settodoList] = useState(null);
  const [loading, setloading] = useState(false);
  const [formAdd, setformAdd] = useState(null);
  const [loadingAdd, setloadingAdd] = useState(false);
  const resetForm = () => {
    setformAdd(null);
  };
  const onLoad = () => {
    getTodoList();
  };
  const handleSubmit = async () => {
    if (!formAdd || !formAdd?.title) {
      setformAdd((prev) => ({ ...prev, title: prev?.title ?? "" }));
      return openNotificationWithIcon(
        "warning",
        "Thêm việc cần làm",
        "Vui lòng kiểm tra lại thông tin!"
      );
    }
    try {
      setloadingAdd(true);
      const formatData = {
        title: formAdd?.title,
        status: TODO_STATUS.ACTIVE,
        createdAt: moment().format(DATE_FORMAT.DATA),
      };
      const { data } = await axiosInstance.post("todos", formatData);
      resetForm();
      onLoad();
      openNotificationWithIcon(
        "success",
        "Thêm việc cần làm",
        "Thao tác thành công!"
      );
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        "error",
        "Thêm việc cần làm",
        "Thao tác thất bại!"
      );
    } finally {
      setloadingAdd(false);
    }
  };
  const getTodoList = async () => {
    try {
      setloading(true);
      const { data } = await axiosInstance.get("todos");
      settodoList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      {contextHolder}
      <div className="flex justify-center">
        <div className="flex justify-center w-[1080px]">
          <div className="grid grid-flow-row w-full gap-10 pt-40">
            <AddTodo
              formAdd={formAdd}
              setformAdd={setformAdd}
              handleSubmit={handleSubmit}
              loadingAdd={loadingAdd}
            />
            <TodoList
              TODO_STATUS={TODO_STATUS}
              todoList={todoList}
              settodoList={settodoList}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
