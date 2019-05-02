using Biblioteca.Model;
using ExtensionMethods;
using LibraryBackend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryBackend.Services
{
    public class CopyRepository: ICopyRepository
    {
        protected readonly LibraryContext dbContext;

        public CopyRepository(LibraryContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<CopyDTO> getBookCopies(int bookId)
        {
            var books = dbContext.Copies.Where(x => x.BookId == bookId).ToList();
            var bookCopies = books
                .Select(x => getDTOFromBookCopy(x))
                .ToList();
            return bookCopies;
        }
        public void addBookCopy(CopyDTO bookCopyDTO)
        {
            var bookCopy = createBookCopyFromDTO(bookCopyDTO);
            var existSameNumberCopy = dbContext.Copies.FirstOrDefault(x => x.Number == bookCopy.Number);
            if (existSameNumberCopy != null)
                throw new Exception("Ja existe exemplar com esse numero");

            dbContext.Copies.Add(bookCopy);
            dbContext.SaveChanges();
        }

        public void deleteCopy(int copyId)
        {
            var copy = dbContext.Copies.FirstOrDefault(x => x.Id == copyId);
            if(copy !=null)
            {
                dbContext.Copies.Remove(copy);
                dbContext.SaveChanges();
            }
        }

        private CopyDTO getDTOFromBookCopy(Copy bookCopy) {
            CopyDTO bookCopyDTO = new CopyDTO();
            bookCopyDTO.Id = bookCopy.Id.ToString();
            bookCopyDTO.BookId= bookCopy.BookId.ToString();
            bookCopyDTO.Number = bookCopy.Number;
            bookCopyDTO.Condition = bookCopy.Condition.DescriptionAttr();
            return bookCopyDTO;
        }

        private Copy createBookCopyFromDTO(CopyDTO bookCopyDTO)
        {
            Copy bookCopy = new Copy();
            bookCopy.Number = bookCopyDTO.Number;
            bookCopy.BookId =int.Parse( bookCopyDTO.BookId);
            bookCopy.Condition = (Condition)Enum.Parse(typeof(Condition), bookCopyDTO.Condition);
            return bookCopy;
        }
    }
}