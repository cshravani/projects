using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace databaseapi.Models
{
    public class ProjectModel
    {
        public int SNo { get; set; }
        public string Hotel { get; set; }
        public System.DateTime Arrival { get; set; }
        public System.DateTime Departure { get; set; }
        public string Type { get; set; }
        public int Guests { get; set; }
        public decimal Price { get; set; }
    
   
        //public int HotelId { get; set; }
        //public string Hotel1 { get; set; }
        //public string Type1 { get; set; }
        //public int Guests1 { get; set; }
        //public decimal Price1 { get; set; }
    }
}