using Biblioteca.Model;
using Biblioteca.Services;
using LibraryBackend.DTO;
using LibraryBackend.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Biblioteca.Controllers
{
    
    public class CopyController : ApiController
    {
        public ICopyRepository copyRepository;
        public CopyController(ICopyRepository repository)
        {
            copyRepository = repository;
        }

        [Route("getCopies/{BookId}")]
        [HttpGet]
        public HttpResponseMessage getCopies(int BookId)
        {

            var books = copyRepository.getBookCopies(BookId);
            var response = Request.CreateResponse(HttpStatusCode.OK, books);
            return response;

        }

        [Route("addCopy")]
        [HttpPost]
        public HttpResponseMessage addCopy([FromBody] CopyDTO copy)
        {
            try
            {
                copyRepository.addBookCopy(copy);
                var request = Request.CreateResponse(HttpStatusCode.OK);
                return request;


            }
            catch (Exception e)
            {
                var request = Request.CreateResponse(HttpStatusCode.BadRequest, e.Message);
                return request;
            }

        }

        [Route("deleteCopy")]
        [HttpPost]
        public void deleteCopy([FromBody] int copyId)
        {
            copyRepository.deleteCopy(copyId);
        }


    }
}

