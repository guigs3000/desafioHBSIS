using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Model;
using LibraryBackend.DTO;

namespace Biblioteca.Services
{
    public class BookRepository: IBookRepository
    {
        protected readonly LibraryContext dbContext;

        public BookRepository(LibraryContext dbContext)
        {
            this.dbContext = dbContext;
        }

        private Book createBookFromDto(BookDTO bookDTO)
        {
            Book book = new Book();
            book.Title = bookDTO.Title;
            book.Pages = bookDTO.Pages;
            book.PublicationDate = bookDTO.PublicationDate;
            book.Description = bookDTO.Description;
            book.ISBN = bookDTO.ISBN;

            var existingAuthor = dbContext.Authors.FirstOrDefault(x => x.Name == bookDTO.Author);
            if(existingAuthor == null)
                book.Author = new Author { Name = bookDTO.Author };
            else
                book.AuthorId = existingAuthor.Id;
            return book;
        }

        private BookDTO getDTOFromBook(Book book) {

            BookDTO bookDTO = new BookDTO();
            bookDTO.BookId = book.Id.ToString();
            bookDTO.Title = book.Title ;
            bookDTO.Pages = book.Pages;
            bookDTO.PublicationDate = book.PublicationDate;
            bookDTO.Description= book.Description;
            bookDTO.ISBN = book.ISBN;
            bookDTO.Author= book.Author.Name;
            bookDTO.AuthorId = book.AuthorId.ToString();
            return bookDTO;
        }

        
        public List<BookDTO> getBooks()
        {
            var books = dbContext.Books.OrderBy(x => x.Title).ToList();
            if(books.Any())
                return books.Select(x => getDTOFromBook(x)).ToList();
            return new List<BookDTO>();
        }

        public BookDTO getBookByTitle(string title)
        {
            var book = dbContext.Books.FirstOrDefault(x => x.Title == title);
            if (book!= null)
                return getDTOFromBook(book);
            return new BookDTO();
        }

        public BookDTO getBookByIsbn(string isbn)
        {
            var book = dbContext.Books.FirstOrDefault(x => x.ISBN == isbn);
            if (book != null)
                return getDTOFromBook(book);
            return new BookDTO();
        }

        public void addBook(BookDTO bookDTO)
        {
            Book existingBook = dbContext.Books.FirstOrDefault(x => x.Title == bookDTO.Title);
            if (existingBook!=null)
            {
                throw new Exception("Livro com mesmo titulo ja cadastrado");
            }
            else
            {
                var book = createBookFromDto(bookDTO);
                dbContext.Books.Add(book);
                dbContext.SaveChanges();
            }
            

        }

        public void deleteBook(string bookId)
        {
            int id = int.Parse(bookId);
            Book book = dbContext.Books.FirstOrDefault(x => x.Id == id);
            dbContext.Books.Remove(book);
            dbContext.SaveChanges();
            
        }

        public void updateBook(BookDTO bookInfo)
        {
            int id = int.Parse(bookInfo.BookId);
            Book existingBook = dbContext.Books.FirstOrDefault(x => x.Id == id);
            Book bookUpdate = createBookFromDto(bookInfo);
            if (existingBook != null)
            {
                existingBook.Update(bookUpdate);
                dbContext.SaveChanges();
            }
        }
    }
}
