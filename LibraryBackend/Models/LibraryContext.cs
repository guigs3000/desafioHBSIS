using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;


namespace Biblioteca.Model
{
    public class LibraryContext: DbContext
    {
       
        public LibraryContext() : base("DefaultConnection")
        { }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Copy> Copies { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().HasKey(x => x.Id);
            modelBuilder.Entity<Author>().HasKey(x => x.Id);
            modelBuilder.Entity<Copy>().HasKey(x => x.Id);

            modelBuilder.Entity<Book>().HasRequired(x => x.Author).WithMany(x => x.Books).HasForeignKey(x=> x.AuthorId);
            modelBuilder.Entity<Copy>().HasRequired(x => x.Book).WithMany(x => x.Copies).HasForeignKey(x => x.BookId);


        }

    }
}
