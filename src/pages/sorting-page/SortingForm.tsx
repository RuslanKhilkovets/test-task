// SortingForm.tsx
import * as React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import './SortingForm.css';
import { useTranslation } from 'react-i18next';
import DataTable from './DataTable';

export interface IDataProperties {
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

const SortingForm: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [searchValues, setSearchValues] = React.useState<IDataProperties>({
    contract: '',
    team: '',
    surname: '',
    name: '',
    patronymic: '',
    status: '',
    date_created: '',
    code: '',
    date_imported: '',
  });

  const handleInputChange = (
    event: SelectChangeEvent<string> | React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setSearchValues((prevValues) => ({
      ...prevValues,
      [name || '']: value as string,
    }));
    console.log(searchValues)
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="sorting-form">
      <div className="sorting-form__container">
        <Typography variant="h4" gutterBottom>
          {t('sorting')}
        </Typography>
        <form action="" className="sorting-form__form" onSubmit={handleSearch}>
          <div className="sorting-form__block">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="contract-select">{t('contract')}</InputLabel>
              <Select
                labelId="contract-select"
                id="contract-select"
                name="contract"
                value={searchValues.contract}
                label="Контракт"
                onChange={handleInputChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'ABC'}>ABC</MenuItem>
                <MenuItem value={'BCD'}>BCD</MenuItem>
                <MenuItem value={'CDE'}>CDE</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="team-select">{t('team')}</InputLabel>
              <Select
                labelId="team-select"
                id="team-select"
                name="team"
                value={searchValues.team}
                label="Підрозділ"
                onChange={handleInputChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                name="surname"
                label={t('surname')}
                variant="outlined"
                value={searchValues.surname}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                name="name"
                label={t('name')}
                variant="outlined"
                value={searchValues.name}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>

          <div className="sorting-form__block">
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="status-select">{t('status')}</InputLabel>
              <Select
                labelId="status-select"
                id="status-select"
                name="status"
                value={searchValues.status}
                label="Статус замовлення"
                onChange={handleInputChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'New'}>New</MenuItem>
                <MenuItem value={'Old'}>Old</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                name="code"
                label={t('code')}
                variant="outlined"
                value={searchValues.code}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                name="patronymic"
                label={t('patronymic')}
                variant="outlined"
                value={searchValues.patronymic}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                name="date_imported"
                label={t('import_date')}
                variant="outlined"
                value={searchValues.date_imported}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>

          <Button type="submit" size="small" variant="contained" className="sorting-form__submit-button">
            {t('search')}
          </Button>
        </form>
        <div className="sorting-form__table">
          <DataTable searchValues={searchValues} />
        </div>
      </div>
    </div>
  );
};

export default SortingForm;
