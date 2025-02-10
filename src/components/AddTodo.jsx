import React from "react";
import { Space, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTodo = ({ formAdd, setformAdd, handleSubmit, loadingAdd }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Space.Compact style={{ width: "100%" }}>
          <Input
            variant={loadingAdd ? "filled" : "outlined"}
            readOnly={loadingAdd}
            size="large"
            placeholder="Việc cần làm..."
            status={formAdd && !formAdd?.title ? "error" : ""}
            value={formAdd?.title}
            onChange={(e) =>
              setformAdd((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <Button
            loading={loadingAdd}
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => handleSubmit()}
          >
            Thêm
          </Button>
        </Space.Compact>
      </div>
    </>
  );
};

export default AddTodo;
