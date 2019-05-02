using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Model;
using LibraryBackend.DTO;

namespace Biblioteca.Services
{
    public interface IBookRepository
    {
        List<BookDTO> getBooks();
        BookDTO getBookByTitle(string title);
        BookDTO getBookByIsbn(string isbn);
        void addBook(BookDTO book);
        void deleteBook(string bookId);
        void updateBook(BookDTO bookInfo);
    }
}
