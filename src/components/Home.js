import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './Home.css'


function Home() {
  const [user, setUser] = useState([]);
  const apiUrl = 'https://localhost:7119/api/Users/GetAllUsers/';
  function getAllUser() {
    return axios.get(apiUrl);
  }
  getAllUser()
      .then(response => {
        console.log(response.data);
        setUser(response.data)
      })

      // .then(data => setUser(data))
      .catch(error => {
        console.error(error);
      });
      
  // return (
    
  //     <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>First Name</th>
  //           <th>Last Name</th>
  //           <th>Email</th>
  //           <th>Password</th>
  //           {/* Add more table headers if needed */}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {user.map(item => (
  //           <tr key={item.User_id}>
  //             <td>{item.fname}</td>
  //             <td>{item.lname}</td>
  //             <td>{item.email}</td>
  //             <td>{item.password}</td>
  //             {/* Add more table cells for other user properties */}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )
  return (
    <div className='table_userlist'>
    <Box sx={{ width: '100%' }}>
      <Typography level="body2" textAlign="center" sx={{ pb: 2 }}>
        ← Scroll direction →
      </Typography>
      <Sheet
        variant="outlined"
        sx={{
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: (
            theme,
          ) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              
              <th style={{ width: 100 }}>First Name</th>
              <th style={{ width: 100 }}>Last Name&nbsp;(g)</th>
              <th style={{ width: 200 }}>Email&nbsp;(g)</th>
              <th style={{ width: 100 }}>Password&nbsp;(g)</th>
              <th style={{ width: 'var(--Table-firstColumnWidth)' }}></th>
              
            </tr>
          </thead>
          <tbody>
            {user.map(item => (
            <tr key={item.User_id}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
    </div>
  );
  }



export default Home