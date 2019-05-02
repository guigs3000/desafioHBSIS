using Biblioteca.Model;
using Biblioteca.Services;
using LibraryBackend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Biblioteca.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BookController : ApiController
    {
        public IBookRepository bookRepository;
        public BookController(IBookRepository repository)
        {
            bookRepository =repository;
        }

        [Route("getBooks")]
        [HttpGet]
        public HttpResponseMessage getBooks()
        {
            
            var books = bookRepository.getBooks();
            var response = Request.CreateResponse(HttpStatusCode.OK, books);
            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;

        }

        [Route("addBook")]
        [HttpPost]
        public HttpResponseMessage addBook([FromBody] BookDTO book)
        {
            try
            {
                bookRepository.addBook(book);
                var request = Request.CreateResponse(HttpStatusCode.OK);
                request.Headers.Add("Access-Control-Allow-Origin", "*");
                return request;


            }
            catch(Exception e)
            {
                var request = Request.CreateResponse(HttpStatusCode.BadRequest, e.Message);
                request.Headers.Add("Access-Control-Allow-Origin", "*");
                return request;
            }
            
        }

        [Route("deleteBook")]
        [HttpPost]
        public void deleteBook([FromBody] string BookId)
        {
            bookRepository.deleteBook(BookId);
        }

        [Route("updateBook")]
        [HttpPut]
        public void updateBook([FromBody] BookDTO book)
        {
            bookRepository.updateBook(book);
        }
    }
}

