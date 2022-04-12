import React, {useState} from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import Contact from './pages/Contact'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () =>{
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'AboutMe'){
            return <AboutMe />;
        }
        if (currentPage === 'Work'){
            return <Work />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <NavBar currentPage ={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        
        </>
    )
}