import React, { useState } from "react";
import shortid from "shortid";
import { Table } from "../../lib";
import _find from "lodash/find";
import { ArcInput, ArcCheckbox  } from '../..';
import styles from "./datatable.module.scss";
import ArcIcon from "../icon";

function EditableTable() {
  const [dataSource, setDataSource] = useState([]);
  let selectedRows = null;
  const handleAdd = () => {
    const newData = {
      name: "",
      value: "",
      isDimension: false,
      isSpecification: false,
      key: shortid.generate(),
    };
    setDataSource([...dataSource, newData]);
  };

  const removeRow = (index) => {
    dataSource.splice(index, 1);
    setDataSource([...dataSource]);
  };

  const deleteRows = () => {
    for (var i = dataSource.length - 1; i >= 0; i--) {
      for (var j = 0; j < selectedRows.length; j++) {
        if (dataSource[i] && dataSource[i].key === selectedRows[j].key) {
          dataSource.splice(i, 1);
        }
      }
    }
    setDataSource([...dataSource]);
  };

  const updateRowData = (key, value, index) => {
    updateTableData(key, value, index);
  };

  const updateTableData = (key, value, index) => {
    let colbject = _find(dataSource, function (o, i) {
      return i === index;
    });
    colbject[key] = value;
    dataSource[index] = colbject;
    setDataSource([...dataSource]);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRow) => {
      selectedRows = selectedRow;
    },
  };

  let columns = [
    {
      title: "Feature Name",
      dataIndex: "name",
      editable: true,
      type: "text",
      render: (text, row, index) => {
        return (
          <ArcInput
            onChange={(e) => updateRowData("name", e.target.value, index)}
            value={text}
            name={"name"}
            placeholder={"Feature name"}
            className={styles.text}
          />
        );
      },
    },
    {
      title: "Value",
      dataIndex: "value",
      editable: true,
      type: "text",
      render: (text, row, index) => {
        return (
          <ArcInput
            onChange={(e) => updateRowData("value", e.target.value, index)}
            value={text}
            name={"value"}
            placeholder={"Value"}
            className={styles.text}
          />
        );
      },
    },
    {
      title: "Is Dimension",
      dataIndex: "isDimension",
      editable: true,
      type: "checkbox",
      render: (text, row, index) => {
        return (
          <div className={styles.checkbox}>
            <ArcCheckbox
              checked={text}
              value={text}
              onChange={(e) =>
                updateRowData("isDimension", !e.target.value, index)
              }
            />
          </div>
        );
      },
    },
    {
      title: "Is Specification",
      dataIndex: "isSpecification",
      editable: true,
      type: "checkbox",
      render: (text, row, index) => {
        return (
          <div className={styles.checkbox}>
            <ArcCheckbox
              value={text}
              checked={text}
              onChange={(e) =>
                updateRowData("isSpecification", !e.target.value, index)
              }
            />
          </div>
        );
      },
    },
    {
      title: "",
      width: "60",
      fixed: "right",
      dataIndex: "operation",
      render: (text, row, index) =>
        dataSource.length >= 1 ? (
          <div className={styles.addIcon} onClick={() => removeRow(index)}>
            <ArcIcon size={{ width: 18, height: 18 }} name={"trash"} />
          </div>
        ) : null,
    },
  ];

  columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  return (
    <div className={styles.editDataWrapper}>
      <Table
        pagination={false}
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={[...dataSource]}
        columns={columns}
      />
      <div className={styles.footer}>
        <div className={styles.addIcon} onClick={handleAdd}>
          <ArcIcon size={{ width: 12, height: 12 }} name={"plus"} />
        </div>
        <div className={styles.trash} onClick={deleteRows}>
          <ArcIcon size={{ width: 18, height: 18 }} name={"trash"} />
        </div>
      </div>
    </div>
  );
}

export default EditableTable;
