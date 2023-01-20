using databaseapi.Models;
using databaseapi.rep;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace databaseapi.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ProjectController : ApiController
    {
        public readonly Iproject Ipr;
        public ProjectController(Iproject ipr)
        {
            this.Ipr = ipr;
        }
        [Route("api/project/Getdetails")]
        [HttpGet]
        public IHttpActionResult getDetails()
        {
            var ret = Ipr.getalldetails();
            if(ret.Count==0)
            {
                return NotFound();
            }
            return Ok(ret);
        }
        [Route("api/project/Getinsert")]
        [HttpPost]
        public IHttpActionResult getadd(ProjectModel pr)
        {
            var ret = Ipr.GetAdd(pr);
            if(!ModelState.IsValid)
            {
                return BadRequest("not a valid detail");
            }
            if(ret==null)
            {
                return NotFound();
            }
            return Ok(ret);
        }
       [Route("api/project/Getupdate")]
        [HttpPut]
        public IHttpActionResult getUpdate(ProjectModel pm)
        {
            var ret = Ipr.GetEdit(pm);
            if(!ModelState.IsValid)
            {
                return BadRequest("not a valid detail");
            }
            if(ret==null)
            {
                return NotFound();
            }
            return Ok(ret);
        }
        [Route("api/project/getdelete/{sno}")]
        [HttpDelete]
        public IHttpActionResult getDelete(int sno)
        {
            var ret = Ipr.GetDelete(sno);
            if(!ModelState.IsValid)
            {
                return BadRequest("not a valid detail");
            }
            if (ret == null)
            {
                return NotFound();
            }
            return Ok(ret);
        }
       // [Route("api/project/getmasterdetails")]
       // [HttpGet]
        //public IHttpActionResult getmasdetails()
        //{
        //    var ret = Ipr.getMaster();
        //    if(!ModelState.IsValid)
        //    {
        //        return BadRequest("not a valid detail");
        //    }
        //    if(ret==null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(ret);
        //}
    }
}
