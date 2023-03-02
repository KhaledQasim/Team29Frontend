import React from 'react';


import { Routes, Route } from 'react-router-dom';

import "./admin/index.css"

import { atom } from 'jotai';
import Cookies from 'js-cookie';
import Test from "./test.js";
import { ColorModeContext, useMode } from './admin/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './admin/scenes/global/Topbar.jsx';
import Dashboard from './admin/scenes/dashboard';
import Team from './admin/scenes/team';
import Contacts from './admin/scenes/contacts';
import Invoices from './admin/scenes/invoices';
import Form from './admin/scenes/form';
import FormProduct from './admin/scenes/form-product';
import Bar from './admin/scenes/bar';
import Pie from './admin/scenes/pie';
import Line from './admin/scenes/line';
import FAQ from './admin/scenes/faq';
import Calendar from './admin/scenes/calendar/calendar';
import Geography from './admin/scenes/geography';
import Sidebar from './admin/scenes/global/Sidebar';


export const jwtAtom = atom(Cookies.get("jwt"));
export const Atomlogged = atom("");



function App() {

  const [theme,colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='app'>
                <Sidebar/>
                <main className='content'>
                    <Topbar/>
                    <Routes>
                        <Route path="" element={<Dashboard />} />
                        <Route path="team" element={<Team />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="invoices" element={<Invoices />} />
                        <Route path="form" element={<Form />} />
                        <Route path="form-product" element={<FormProduct />} />
                        <Route path="bar" element={<Bar />} />
                        <Route path="pie" element={<Pie />} />
                        <Route path="line" element={<Line />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="geography" element={<Geography />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>    
  );
}

export default App;