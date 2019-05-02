using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Biblioteca.Model
{
    public class Copy
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public virtual Book Book { get; set; }
        public string Number { get; set; }
        public Condition Condition { get; set; }
          
    }

    public enum Condition
    {
        [Description("Novo")]
        New,
        [Description("Excelente")]
        VeryGood,
        [Description("Boa")]
        Fine,
        [Description("Razoavel")]
        Fair,
        [Description("Ruim")]
        Poor
    }

    


}
