
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.Model
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ISBN { get; set; }
        public int AuthorId { get; set; }
        public virtual Author Author { get; set; }

        public string Description { get; set; }
        public int Pages { get; set; }
        public DateTime? PublicationDate { get; set; }
        
        public virtual ICollection<Copy> Copies { get; set; }

        public void Update(Book book)
        {
            this.Title = String.IsNullOrEmpty(book.Title) ? this.Title : book.Title;
            this.ISBN = String.IsNullOrEmpty(book.ISBN) ? this.ISBN : book.ISBN;
            this.Description = String.IsNullOrEmpty(book.Description) ? this.Description : book.Description;
            this.Pages= (book.Pages ==0) ? this.Pages : book.Pages;
            this.PublicationDate = (book.PublicationDate == null) ? this.PublicationDate : book.PublicationDate;
            if(book.Author != null)
            {
                this.Author = book.Author;
                this.AuthorId = 0;
            }
            
        }

    }
}
