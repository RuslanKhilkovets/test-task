// DataTable.tsx
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './DataTable.css';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from 'react-router-dom';

export interface IDataProperties {
  id: number; 
  contract: string;
  team: string;
  surname: string;
  name: string;
  patronymic: string;
  status: string;
  date_created: string;
  code: string;
  date_imported: string;
}

interface DataTableProps {
  searchValues: IDataProperties; 
}

export default function DataTable({ searchValues }: DataTableProps) {
  const [originalData, setOriginalData] = React.useState<IDataProperties[]>([]);
  const [filteredData, setFilteredData] = React.useState<IDataProperties[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns: GridColDef[] = [
    {
      field: 'initials',
      headerName: t('initials'),
      width: 300,
    },
    {
      field: 'birthdayDate',
      headerName: t('birthdayDate'),
      width: 150,
    },
    {
      field: 'code',
      headerName: t('code'),
      width: 150,
    },
    {
      field: 'contract',
      headerName: t('contract'),
      width: 160,
    },
    {
      field: 'status',
      headerName: t('status'),
      width: 160,
    },
    {
      field: 'Print',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            navigate(`../pdf-reader?id=${params.row.id}`);
          }}
          color="primary"
        >
          <PrintIcon />
        </IconButton>
      ),
    },
  ];

  React.useEffect(() => {
    const url = "http://localhost:3001/rows"; 
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOriginalData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  React.useEffect(() => {
    if(searchValues){
        // const filteredData = originalData.filter((item) => {
        //     return (
        //       (!searchValues.contract || item.contract.includes(searchValues.contract)) &&
        //       (!searchValues.team || item.team.includes(searchValues.team)) &&
        //       (!searchValues.surname || item.surname.includes(searchValues.surname)) &&
        //       (!searchValues.name || item.name.includes(searchValues.name)) &&
        //       (!searchValues.status || item.status.includes(searchValues.status)) &&
        //       (!searchValues.code || item.code.includes(searchValues.code)) &&
        //       (!searchValues.patronymic || item.patronymic.includes(searchValues.patronymic)) &&
        //       (!searchValues.date_imported || item.date_imported.includes(searchValues.date_imported))
        //     );
        //   });
        //   setFilteredData(filteredData);
    }

  }, [searchValues]);

  return (
    <div className="data-table">
      <DataGrid
        rows={originalData} 
        columns={columns}
        autoHeight
        checkboxSelection
      />
    </div>
  );
}
