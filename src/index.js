import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './Books'
import Book from './Book'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'

function BookList() {
  return (
    <>
      <Header></Header>
      <Buttons></Buttons>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
      <Footer></Footer>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
