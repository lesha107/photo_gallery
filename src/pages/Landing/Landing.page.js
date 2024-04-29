import React from 'react';
import Header from "./components/Header/Header.component";
import Gallery from "./components/Gallery/Gallery.component";
import ContactsPage from "../Contacts/Contacts.page";
import {Route, Routes} from "react-router-dom";

const LadingPage = () => {
    return (
        <div style={{height: '100%'}}>
            <div style={{height: '20%'}}>
                <Header/>
            </div>
            <div >
            {/*<div style={{height: '80%'}}>*/}
                <Routes>
                    <Route path="/" element={<Gallery/>}/>
                    <Route path="/photos" element={<Gallery/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default LadingPage;
