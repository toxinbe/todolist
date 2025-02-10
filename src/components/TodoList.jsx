import React from "react";
import { Table } from "antd";

const TodoList = ({ todoList, settodoList, loading }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];
  return (
    <div>
      <Table loading={loading} dataSource={todoList} columns={columns} />
    </div>
  );
};

export default TodoList;
