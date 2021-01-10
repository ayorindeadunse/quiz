using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace quiz_backend.Controllers
{
    /* public class QuestionsController : Controller
     {
         // GET: /<controller>/
         public IActionResult Index()
         {
             return View();
         }
     }*/


    /*[Produces("application/json")]
     [Route("api/Questions")]*/
    [Produces("application/json")]
    [ApiController]
    [Route("api/Questions")]

    public class QuestionsController : Controller
    {
        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            
        }
    }
}
