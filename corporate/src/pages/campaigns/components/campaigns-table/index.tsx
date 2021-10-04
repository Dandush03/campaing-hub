import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import CampaignsTableHeader from './CampaignsTableHeader';
import CampaignsTableBody from './CampaignsTableBody';
import columns from './TableColumns';
import { CampaignsTableType } from './type';


const CampaignsTable: React.FunctionComponent<CampaignsTableType> = ({
  campaings = [], extended,
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
      <TableContainer sx={{ height: 'calc(100vh - 190px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <CampaignsTableHeader columns={columns} />
          <CampaignsTableBody
            campaings={campaings}
            currentPage={page * rowsPerPage}
            rowsNumber={page * rowsPerPage + rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={campaings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{ ...(!extended && {
          '& .MuiToolbar-root': { paddingLeft: 2 },
          '& .MuiTablePagination-spacer': { display: 'none' },
        }) }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default CampaignsTable;
