using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryBackend.DTO
{
    public class CopyDTO
    {
        public string Id { set; get; }
        public string BookId { get; set; }
        public string Number { get; set; }
        public string Condition { get; set; }
    }
}