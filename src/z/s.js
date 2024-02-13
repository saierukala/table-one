import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "amount", headerName: "Amount", width: 130 },
    {
      field: "paid",
      headerName: "Paid",
      width: 100,
      renderCell: (params) => (params.value ? "Paid" : "Not Paid"),
    },
    {
      field: "unpaid",
      headerName: "Unpaid",
      width: 120,
      renderCell: (params) => (params.value ? "Unpaid" : "Not Unpaid"),
    },
    { field: "date", headerName: "Date", width: 120 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "due_date", headerName: "Due Date", width: 150 },
  ]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // This is your JSON data
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
          },
        ];

        setRows(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        onColumnVisibilityChange={(changedColumn) => {
          setColumns((prevColumns) =>
            prevColumns.map((column) =>
              column.field === changedColumn.field
                ? { ...column, hide: changedColumn.isHidden }
                : column
            )
          );
        }}
      />
    </div>
  );
};

export default DataTable;
