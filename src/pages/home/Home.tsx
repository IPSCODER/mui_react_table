import { Box, Typography } from '@mui/material'
import UITable from "../../ui/table/UITable"
import React from 'react'
import { Data } from '@src/constant/interfaces';
interface HeadCell {
  disablePadding: boolean;
  id: number | string;
  label: string;
  numeric: boolean;
  input:boolean;
}



const headCells: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name',input:false },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address',input:false },
  { id: 'phone', numeric: true, disablePadding: false, label: 'Phone',input:true },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email',input:false },
  { id: 'dateOfBirth', numeric: false, disablePadding: false, label: 'Date of Birth',input:false },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gender',input:false },
  { id: 'occupation', numeric: false, disablePadding: false, label: 'Occupation',input:false },
  { id: 'company', numeric: false, disablePadding: false, label: 'Company',input:false },
  { id: 'hobbies', numeric: false, disablePadding: false, label: 'Hobbies',input:false },
  { id: 'nationality', numeric: false, disablePadding: false, label: 'Nationality',input:false },
];


type Contact = {
  id: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  company: string;
  hobbies: string[];
  nationality: string;
};

const initialData = [
  { 
    id: 1, 
    name: "Pravin Sawant", 
    address: "Pune", 
    phone: 8888888888, 
    email: "pravin@example.com", 
    dateOfBirth: "1990-01-01", 
    gender: "Male", 
    occupation: "Software Engineer", 
    company: "Tech Solutions", 
    hobbies: ["Coding", "Reading"], 
    nationality: "Indian" 
  },
  { 
    id: 2, 
    name: "John Doe", 
    address: "Mumbai", 
    phone: 9998887777, 
    email: "john@example.com", 
    dateOfBirth: "1985-05-15", 
    gender: "Male", 
    occupation: "Designer", 
    company: "Creative Co.", 
    hobbies: ["Drawing", "Traveling"], 
    nationality: "American" 
  },
  { 
    id: 3, 
    name: "Alice Smith", 
    address: "Delhi", 
    phone: 7778889999, 
    email: "alice@example.com", 
    dateOfBirth: "1992-03-12", 
    gender: "Female", 
    occupation: "Data Analyst", 
    company: "Data Insights", 
    hobbies: ["Gaming", "Music"], 
    nationality: "British" 
  },
  { 
    id: 4, 
    name: "Bob Johnson", 
    address: "Bangalore", 
    phone: 8887776666, 
    email: "bob@example.com", 
    dateOfBirth: "1988-07-20", 
    gender: "Male", 
    occupation: "Project Manager", 
    company: "Business Inc.", 
    hobbies: ["Hiking", "Photography"], 
    nationality: "Canadian" 
  },
  { 
    id: 5, 
    name: "Charlie Brown", 
    address: "Chennai", 
    phone: 6665554444, 
    email: "charlie@example.com", 
    dateOfBirth: "1995-10-30", 
    gender: "Male", 
    occupation: "Marketing Specialist", 
    company: "Ad Ventures", 
    hobbies: ["Cooking", "Blogging"], 
    nationality: "Australian" 
  },
  { 
    id: 6, 
    name: "David Wilson", 
    address: "Hyderabad", 
    phone: 5554443333, 
    email: "david@example.com", 
    dateOfBirth: "1982-12-22", 
    gender: "Male", 
    occupation: "Financial Analyst", 
    company: "Finance Corp.", 
    hobbies: ["Investing", "Reading"], 
    nationality: "Indian" 
  },
  { 
    id: 7, 
    name: "Eva Green", 
    address: "Kolkata", 
    phone: 4443332222, 
    email: "eva@example.com", 
    dateOfBirth: "1991-09-05", 
    gender: "Female", 
    occupation: "HR Manager", 
    company: "People First", 
    hobbies: ["Yoga", "Traveling"], 
    nationality: "French" 
  },
  { 
    id: 8, 
    name: "Frank Wright", 
    address: "Ahmedabad", 
    phone: 3332221111, 
    email: "frank@example.com", 
    dateOfBirth: "1983-06-17", 
    gender: "Male", 
    occupation: "Web Developer", 
    company: "Webify", 
    hobbies: ["Gaming", "Cycling"], 
    nationality: "German" 
  },
  { 
    id: 9, 
    name: "Grace Lee", 
    address: "Jaipur", 
    phone: 2221110000, 
    email: "grace@example.com", 
    dateOfBirth: "1994-11-11", 
    gender: "Female", 
    occupation: "Content Writer", 
    company: "Write Right", 
    hobbies: ["Writing", "Dancing"], 
    nationality: "Korean" 
  },
  { 
    id: 10, 
    name: "Henry Adams", 
    address: "Surat", 
    phone: 1110009999, 
    email: "henry@example.com", 
    dateOfBirth: "1987-08-08", 
    gender: "Male", 
    occupation: "Sales Executive", 
    company: "Sales Boost", 
    hobbies: ["Golf", "Fishing"], 
    nationality: "American" 
  },
  { 
    id: 11, 
    name: "Isla Fisher", 
    address: "Nagpur", 
    phone: 9990008888, 
    email: "isla@example.com", 
    dateOfBirth: "1990-02-14", 
    gender: "Female", 
    occupation: "Teacher", 
    company: "Bright Future Academy", 
    hobbies: ["Reading", "Volunteering"], 
    nationality: "Australian" 
  },
  { 
    id: 12, 
    name: "Jack Black", 
    address: "Indore", 
    phone: 8880007777, 
    email: "jack@example.com", 
    dateOfBirth: "1986-04-04", 
    gender: "Male", 
    occupation: "Chef", 
    company: "Gourmet Kitchen", 
    hobbies: ["Cooking", "Traveling"], 
    nationality: "Canadian" 
  },
  { 
    id: 13, 
    name: "Kathy Bates", 
    address: "Coimbatore", 
    phone: 7770006666, 
    email: "kathy@example.com", 
    dateOfBirth: "1984-07-25", 
    gender: "Female", 
    occupation: "Nurse", 
    company: "Health Care Co.", 
    hobbies: ["Gardening", "Hiking"], 
    nationality: "Indian" 
  },
  { 
    id: 14, 
    name: "Leo Messi", 
    address: "Visakhapatnam", 
    phone: 6660005555, 
    email: "leo@example.com", 
    dateOfBirth: "1988-06-24", 
    gender: "Male", 
    occupation: "Professional Athlete", 
    company: "FC Barcelona", 
    hobbies: ["Football", "Philanthropy"], 
    nationality: "Argentinian" 
  },
  { 
    id: 15, 
    name: "Mia Wong", 
    address: "Thane", 
    phone: 5550004444, 
    email: "mia@example.com", 
    dateOfBirth: "1993-01-30", 
    gender: "Female", 
    occupation: "Artist", 
    company: "Creative Arts", 
    hobbies: ["Painting", "Photography"], 
    nationality: "Chinese" 
  },
];


const createContact = (data: {
  id: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  company: string;
  hobbies: string[];
  nationality: string;
}): Contact => {
  return {
    id: data.id,
    name: data.name,
    address: data.address,
    phone: data.phone,
    email: data.email,
    dateOfBirth: data.dateOfBirth,
    gender: data.gender,
    occupation: data.occupation,
    company: data.company,
    hobbies: data.hobbies,
    nationality: data.nationality,
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