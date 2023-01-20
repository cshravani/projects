using databaseapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace databaseapi.rep
{
    public interface Iproject
    {
        List<ProjectModel> getalldetails();
        string GetAdd(ProjectModel p);
        string GetEdit(ProjectModel pm);
        string GetDelete(int id);
       // List<ProjectModel> getMaster();
    }
    class projectdetails : Iproject
    {
        SAMPLEEntities2 sx = new SAMPLEEntities2();
        SAMPLEEntities3 sx2 = new SAMPLEEntities3();
        List<ProjectModel> Iproject.getalldetails()
        {
            List<ProjectModel> plist = null;
            plist = sx.Reservations.Select(s => new ProjectModel()
            {
                SNo = s.SNo,
                Hotel = s.Hotel,
                Arrival = s.Arrival,
                Departure = s.Departure,
                Type = s.Type,
                Guests = s.Guests,
                Price = s.Price

            }).ToList<ProjectModel>();
            sx.SaveChanges();
            return plist;
        }
        string Iproject.GetAdd(ProjectModel p)
        {
            var res1 = sx.Reservations.Where(s => p.SNo == s.SNo).FirstOrDefault();
            if (res1 == null)
            {
                sx.Reservations.Add(new Reservation
                {
                    SNo = p.SNo,
                    Hotel = p.Hotel,
                    Arrival = p.Arrival,
                    Departure = p.Departure,
                    Type = p.Type,
                    Guests = p.Guests,
                    Price = p.Price
                });
            }
            else
            {
                res1.SNo = p.SNo;
                res1.Hotel = p.Hotel;
                    res1.Arrival = p.Arrival;
                res1.Departure = p.Departure;
                res1.Type = p.Type;
                    res1.Guests = p.Guests;
                 
                 
                    res1.Price = p.Price;
                
                sx.SaveChanges();
                // sx.Dispose();
                //return "updated";
            }
            sx.SaveChanges();
            return "inserted";
           
        }
        string Iproject.GetEdit(ProjectModel pm)
        {
            var res1 = sx.Reservations.Where(s => pm.SNo==s.SNo).FirstOrDefault();
            if (res1 != null)
            {
                res1.SNo = pm.SNo;
                res1.Hotel = pm.Hotel;
                res1.Arrival = pm.Arrival;
                res1.Departure = pm.Departure;
                res1.Type = pm.Type;
                res1.Guests = pm.Guests;
                res1.Price = pm.Price;
            }
            sx.SaveChanges();
            // sx.Dispose();
            return "updated";
        }
        string Iproject.GetDelete(int sno)
        {
            var res = sx.Reservations.Where(s => s.SNo == sno).FirstOrDefault();
            if(res!=null)
            {
                sx.Reservations.Remove(res);
            }
            sx.SaveChanges();
            return "deleted";
        }

        //List<ProjectModel> Iproject.getMaster()
        //{
        //    var res = sx2.mastertbs.Select(s => new ProjectModel()
        //    {
        //        HotelId = s.HotelId,
        //        Hotel1 = s.Hotel,
        //        Type1 = s.Type,
        //        Guests1 = s.Guests,
        //        Price1 = s.Price
        //    }).ToList<ProjectModel>();
        //    return res;

        //}
    }
}
