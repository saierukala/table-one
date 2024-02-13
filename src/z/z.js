import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import "./datatable.css"; // Import your CSS file for styling
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const DataTable = ({ columnDefinitions }) => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState(columnDefinitions);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inputError, setInputError] = useState(false);
  const [editedRow, setEditedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Your sample JSON data
      const jsonData = [
        {
          id: 1,
          name: "John Doe",
          amount: 100,
          paid: true,
          unpaid: false,
          date: "2024-02-08",
          address: "123 Main St, City, Country",
          due_date: "2024-02-15",
          course: "Sql",
          coupon: "AASHION20",
        },
        {
          id: 2,
          name: "Alice Smith",
          amount: 150,
          paid: false,
          unpaid: true,
          date: "2024-02-09",
          address: "456 Elm St, Town, Country",
          due_date: "2024-02-16",
          course: "Python",
          coupon: "FASHION20",
        },
        {
          id: 3,
          name: "Bob Johnson",
          amount: 200,
          paid: true,
          unpaid: false,
          date: "2024-02-10",
          address: "789 Oak St, Village, Country",
          due_date: "2024-02-17",
          course: "Python",
          coupon: "FASHION20",
        },
        {
          id: 4,
          name: "Emily Wilson",
          amount: 120,
          paid: true,
          unpaid: false,
          date: "2024-02-11",
          address: "101 Pine St, Hamlet, Country",
          due_date: "2024-02-18",
          course: "Nodejs",
          coupon: "CASHION20",
        },
        {
          id: 5,
          name: "Michael Brown",
          amount: 180,
          paid: false,
          unpaid: true,
          date: "2024-02-12",
          address: "202 Cedar St, Town, Country",
          due_date: "2024-02-19",
          course: "Reactjs",
          coupon: "CASHION20",
        },
        {
          id: 6,
          name: "Emma Davis",
          amount: 90,
          paid: true,
          unpaid: false,
          date: "2024-02-13",
          address: "303 Maple St, City, Country",
          due_date: "2024-02-20",
          course: "Nodejs",
          coupon: "BASHION20",
        },
        {
          id: 7,
          name: "William Taylor",
          amount: 130,
          paid: true,
          unpaid: false,
          date: "2024-02-14",
          address: "404 Elm St, Village, Country",
          due_date: "2024-02-21",
          course: "Nodejs",
          coupon: "CASHION20",
        },
        {
          id: 8,
          name: "Olivia Martinez",
          amount: 160,
          paid: false,
          unpaid: true,
          date: "2024-02-15",
          address: "505 Oak St, City, Country",
          due_date: "2024-02-22",
          course: "Nodejs",
          coupon: "BASHION20",
        },
        {
          id: 9,
          name: "James Anderson",
          amount: 140,
          paid: true,
          unpaid: false,
          date: "2024-02-16",
          address: "606 Pine St, Town, Country",
          due_date: "2024-02-23",
          course: "Sql",
          coupon: "AASHION20",
        },
        {
          id: 10,
          name: "Sophia Garcia",
          amount: 110,
          paid: true,
          unpaid: false,
          date: "2024-02-17",
          address: "707 Cedar St, Village, Country",
          due_date: "2024-02-24",
          course: "Python",
          coupon: "FASHION20",
        },
      ];
      setRows(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleColumnVisibilityChange = (changedColumn) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.field === changedColumn.field
          ? { ...column, hide: changedColumn.isHidden }
          : column
      )
    );
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleFilterData = () => {
    if (startTime.trim() === "" || endTime.trim() === "") {
      setInputError(true);
      return;
    }
    setInputError(false);

    const filteredData = rows.filter((row) => {
      // Assuming date is in format "YYYY-MM-DD"
      return row.date >= startTime && row.date <= endTime;
    });
    setRows(filteredData);
    setEndTime("");
    setStartTime("");
  };

  const handleRefreshData = () => {
    fetchData();
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleEditClick = (id) => () => {
    setEditedRow(id);
  };

  const handleEditSave = (id) => () => {
    setEditedRow(null);
    // You can handle saving data to the backend here if needed
  };

  const handleEditChange = (event, field, id) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: event.target.value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const columnsWithActions = [
    ...columns,
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: ({ row }) => (
        <React.Fragment>
          {editedRow === row.id ? (
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Save"
              onClick={handleEditSave(row.id)}
              color="inherit"
            />
          ) : (
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              onClick={handleEditClick(row.id)}
              color="inherit"
            />
          )}
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(row.id)}
            color="inherit"
          />
        </React.Fragment>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="top-section">
        <div className="box1">
          <div className="date">
            <TextField
              className={inputError ? "error text" : "text"}
              id="start-time"
              label="Start time"
              variant="outlined"
              value={startTime}
              onChange={handleStartTimeChange}
            />
            <TextField
              className={inputError ? "error text" : "text"}
              id="end-time"
              label="End time"
              variant="outlined"
              value={endTime}
              onChange={handleEndTimeChange}
            />
            <button onClick={handleFilterData}>Result</button>
          </div>
        </div>
        <div className="box2">
          <EditNoteTwoToneIcon className="icon" fontSize="large" />
          <RefreshIcon
            className="icon"
            fontSize="large"
            onClick={handleRefreshData}
          />
        </div>
      </div>
      <div className="card">
        <DataGrid
          rows={rows}
          columns={columnsWithActions}
          onEditCellChange={(params) =>
            handleEditChange(params.event, params.field, params.id)
          }
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
          onColumnVisibilityChange={handleColumnVisibilityChange}
        />
      </div>
    </div>
  );
};

export default DataTable;
