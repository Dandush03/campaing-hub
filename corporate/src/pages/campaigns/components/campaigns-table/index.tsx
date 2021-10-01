import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Column, Data } from './type';
import CampaignsTableHeader from './CampaignsTableHeader';
import CampaignsTableRow from './CampaignsTableRow';

interface CampaignsTableType {
  rows: Data[],
  columns: Column[]
}

const CampaignsTable: React.FunctionComponent<CampaignsTableType> = ({
  rows = [], columns = [],
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 64px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <CampaignsTableHeader columns={columns} />
          <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <CampaignsTableRow
                      columns={columns}
                      row={row}
                      key={`${row.code}`}/>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default CampaignsTable;
