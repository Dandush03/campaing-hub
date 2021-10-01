import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import CampaignsTableHeader from './CampaignsTableHeader';
import CampaignsTableBody from './CampaignsTableBody';
import { Campaign } from '../../../../store/type';
import columns from './TableColumns';
interface CampaignsTableType {
  campaings: Campaign[],
}

const CampaignsTable: React.FunctionComponent<CampaignsTableType> = ({
  campaings = [],
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default CampaignsTable;
