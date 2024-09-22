import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";


interface EnhancedTableProps {
    numSelected: number;
    // (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    orderBy: string;
    rowCount: number;
    headCells:any;
  }


  

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, orderBy, numSelected, rowCount,headCells } = props;


  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell:any,index:any) => (
          <TableCell
            key={index}
            align={'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            <TableSortLabel
              // active={orderBy === headCell.id}
              // onClick={createSortHandler(headCell.id)}
              // sx={{display:"flex",flexDirection:"column"}}
            >
              <Typography sx={{display:"flex",flexDirection:"column",width:"max-content"}} >
              {headCell.label}
              {headCell.input && <input type='text' placeholder='search..' style={{width:"150px"}} />}
              </Typography>
              {/* {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}