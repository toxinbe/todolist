import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems1 = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" }
];

const initialItems2 = [
  { id: "4", content: "Item 4" },
  { id: "5", content: "Item 5" }
];

const DragAndDropList = () => {
  const [list1, setList1] = useState(initialItems1);
  const [list2, setList2] = useState(initialItems2);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Xác định danh sách nguồn và đích
    const sourceList = source.droppableId === "list1" ? list1 : list2;
    const destList = destination.droppableId === "list1" ? list1 : list2;
    const setSourceList = source.droppableId === "list1" ? setList1 : setList2;
    const setDestList = destination.droppableId === "list1" ? setList1 : setList2;

    const [movedItem] = sourceList.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      // Nếu kéo thả trong cùng một danh sách
      sourceList.splice(destination.index, 0, movedItem);
      setSourceList([...sourceList]);
    } else {
      // Nếu kéo thả giữa hai danh sách
      destList.splice(destination.index, 0, movedItem);
      setSourceList([...sourceList]);
      setDestList([...destList]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* Danh sách 1 */}
        <Droppable droppableId="list1">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ padding: 20, width: 200, minHeight: 200, background: "#f0f0f0" }}
            >
              <h3>Danh sách 1</h3>
              {list1.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 10,
                        margin: "5px 0",
                        background: "#fff",
                        border: "1px solid #ccc",
                        ...provided.draggableProps.style
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Danh sách 2 */}
        <Droppable droppableId="list2">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ padding: 20, width: 200, minHeight: 200, background: "#f0f0f0" }}
            >
              <h3>Danh sách 2</h3>
              {list2.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 10,
                        margin: "5px 0",
                        background: "#fff",
                        border: "1px solid #ccc",
                        ...provided.draggableProps.style
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DragAndDropList;
