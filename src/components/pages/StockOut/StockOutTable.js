import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  {
    id: 'stt',
    label: 'STT',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tenSP',
    label: 'Tên sản phẩm',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tenNcc',
    label: 'Nhà cung cấp',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id:'soLuong',
    label: 'Số lượng',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dayOut',
    label: 'Ngày xuất',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'creator',
    label: 'Tạo bởi',
    minWidth: 50,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id:'money',
    label: 'Thành tiền',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'state',
    label: 'Trạng thái',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'act',
    label: 'Hành động',
    minWidth: 0,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

 function StockInTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/receipt')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
        <Paper sx={{ width: '100%', overflow: 'scroll' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: 'bold',
                                        fontSize: '1.8rem',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    style={{ cursor: 'pointer' }}
                                    tabIndex={-1}
                                    key={row.code}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ fontSize: '1.8rem' }}
                                            >
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
  );
}

export default StockInTable;