import { Box, Typography } from '@mui/material'
import UITable from "../../ui/table/UITable"
import React from 'react'
import { Data } from '@src/constant/interfaces';
interface HeadCell {
  disablePadding: boolean;
  id: number | string;
  label: string;
  numeric: boolean;
}



const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone',
  }
];



type Contact = {
  id: number;
  name: string;
  address: string;
  phone: number;
};

const initialData = [
  { id: 1, name: "Pravin Sawant", address: "Pune", phone: 8888888888 },
  { id: 2, name: "John Doe", address: "Mumbai", phone: 9998887777 },
  { id: 3, name: "Alice Smith", address: "Delhi", phone: 7778889999 },
  { id: 4, name: "Bob Johnson", address: "Bangalore", phone: 8887776666 },
  { id: 5, name: "Charlie Brown", address: "Chennai", phone: 6665554444 },
  { id: 6, name: "David Wilson", address: "Hyderabad", phone: 5554443333 },
  { id: 7, name: "Eva Green", address: "Kolkata", phone: 4443332222 },
  { id: 8, name: "Frank Wright", address: "Ahmedabad", phone: 3332221111 },
  { id: 9, name: "Grace Lee", address: "Jaipur", phone: 2221110000 },
  { id: 10, name: "Henry Adams", address: "Surat", phone: 1110009999 },
  { id: 11, name: "Isla Fisher", address: "Nagpur", phone: 9990008888 },
  { id: 12, name: "Jack Black", address: "Indore", phone: 8880007777 },
  { id: 13, name: "Kathy Bates", address: "Coimbatore", phone: 7770006666 },
  { id: 14, name: "Leo Messi", address: "Visakhapatnam", phone: 6660005555 },
  { id: 15, name: "Mia Wong", address: "Thane", phone: 5550004444 },
];

const createContact = (data: { id: number; name: string; address: string; phone: number }): Contact => {
  return {
    id: data.id,
    name: data.name,
    address: data.address,
    phone: data.phone,
  };
};

const datas = initialData.map(createContact);

const Home = () => {
    


  return (
    <Box>
        <Typography variant='h6' >
            This Is Basics
        </Typography>
        <UITable rows={datas} headCells={headCells} />
    </Box>
  )
}

export default Home