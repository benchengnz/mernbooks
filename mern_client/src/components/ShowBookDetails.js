import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams, useNavigate, Link } from 'react-router-dom';

export default function ShowBookDetails() { 
  let params = useParams();
  let navigate = useNavigate();
  const [book, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('http://localhost:8082/api/books/'+ params.id);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [ params.id]) ;

  function BookItem() {
    console.info(book);
    return (
      <div>
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Title</td>
              <td>{ book.title }</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Author</td>
              <td>{ book.author }</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ISBN</td>
              <td>{ book.isbn }</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Publisher</td>
              <td>{ book.publisher }</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Published Date</td>
              <td>{ book.published_date }</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Description</td>
              <td>{ book.description }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function deleteClick(e) {
    e.preventDefault();
    alert('deleteClick');
    // axios
    //   .delete('http://localhost:8082/api/books/'+params.id)
    //   .then(res => {
    //     navigate("/");
    //   })
    //   .catch(err => {
    //     console.log("Error form ShowBookDetails_deleteClick");
    //   })
  }

  return (
      
    <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BookItem() }   
          </div>

          <div className="row">
            <div className="col-md-6">
            <button type="button" className="btn btn-outline-danger btn-lg btn-block"
               onClick={deleteClick}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
  )
}