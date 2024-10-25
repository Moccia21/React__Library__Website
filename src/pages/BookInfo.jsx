import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addItemToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
  }

  const handleClick = () => {
    handleAddToCart();
    addItemToCart(book);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} className="book__selected--img" alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore sunt quod animi necessitatibus alias expedita illo
                    culpa reiciendis, illum nesciunt, ex nihil mollitia, unde
                    iusto quos porro quas quibusdam odio?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore sunt quod animi necessitatibus alias expedita illo
                    culpa reiciendis, illum nesciunt, ex nihil mollitia, unde
                    iusto quos porro quas quibusdam odio?
                  </p>
                </div>
                <button className="btn" 
                onClick={handleClick}
                style={{backgroundColor: isAdded ? 'gray' : '#7342d6'}}
                disabled={isAdded}>
                 {isAdded ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>

          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title--top">
                  Recommended Books
                </h2>
              </div>
              <div className="books">
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
