using LibraryBackend.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryBackend.Services
{
    public interface ICopyRepository
    {
        List<CopyDTO> getBookCopies(int bookId);
        void addBookCopy(CopyDTO bookCopyDTO);
        void deleteCopy(int copyId);
    }
}