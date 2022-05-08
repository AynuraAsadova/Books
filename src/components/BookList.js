import React from 'react';
import Book from './Book';
import '../css/BookList.css';
import Switch from '@mui/material/Switch';

import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

class BookList extends React.Component {


    render() {
        return(
            <ThemeContext.Consumer>{(contextTheme) => (
                <BookContext.Consumer>
                    {contextBooks=> {
                        
                        const { books } = contextBooks;
                        const { themeChange, checked, dark, light } = contextTheme;
                        const theme = checked ? dark : light;

                        return (
                            <section className='page-section' style={{background: theme.bg, color: theme.txt}} id="portfolio">
                                <div className='container'>
                                    <div className='text-center'>
                                        <h2 className="section-heading text-uppercase">Books</h2>
                                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                        <div className='check-input'>
                                            <Switch {...label} onChange={themeChange}/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        {books.map((book, i) => {
                                            return <Book book={book}
                                                            key={i}
                                                            />
                                        })}
                                    </div>
                                </div>
                            </section>
                        )
                    }}
                </BookContext.Consumer>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList;