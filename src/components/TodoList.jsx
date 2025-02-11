import React from "react";
import { Tag, Input, Button } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const TodoList = ({ TODO_STATUS, todoList, settodoList, loading }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div className="border rounded-lg">
          <Tag
            icon={<SyncOutlined spin />}
            color="processing"
            className="flex items-center w-full rounded-t-lg rounded-b-none border-b text-lg font-semibold h-[40px]"
          >
            Cần làm
          </Tag>
          <ul className="h-[50vh] overflow-y-scroll">
            {todoList?.map(
              (item, index) =>
                item?.status === TODO_STATUS?.ACTIVE && (
                  <li
                    key={index}
                    className="m-2 pl-2 border rounded-lg grid grid-cols-12 gap-1 items-center"
                  >
                    <Input.TextArea
                      className="col-span-11 p-0 rounded-none"
                      autoSize={{ minRows: 1 }}
                      variant="borderless"
                      // variant="filled"
                      readOnly={true}
                      // size="middle"
                      value={"DSA"}
                    />
                    <Button
                      color="default"
                      variant="text"
                      shape="circle"
                      className="p-1"
                      icon={<MoreOutlined />}
                    />
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="border rounded-lg h-full">
          <Tag
            icon={<CheckCircleOutlined />}
            color="success"
            className="flex items-center w-full rounded-t-lg rounded-b-none border-b text-lg font-semibold h-[40px]"
          >
            Hoàn thành
          </Tag>
        </div>
      </div>
    </>
  );
};

export default TodoList;
