import React from "react";
import DataTable from "./datatable";

const MyComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70, editable: true },
    { field: "name", headerName: "Name", width: 130, editable: true },
    { field: "amount", headerName: "Amount", width: 90, editable: true },
    {
      field: "paid",
      headerName: "Paid",
      width: 100,
      renderCell: (params) => (params.value ? "Paid" : "Not Paid"),
      editable: true,
    },
    {
      field: "unpaid",
      headerName: "Unpaid",
      width: 120,
      renderCell: (params) => (params.value ? "Unpaid" : "Not Unpaid"),
      editable: true,
    },
    { field: "date", headerName: "Date", width: 120, editable: true },
    { field: "address", headerName: "Address", width: 120, editable: true },
    { field: "due_date", headerName: "Due Date", width: 120, editable: true },
    { field: "course", headerName: "Course", width: 100, editable: true },
    { field: "coupon", headerName: "Coupon", width: 110, editable: true },
  ];

  return <DataTable columnDefinitions={columns} />;
};

export default MyComponent;
