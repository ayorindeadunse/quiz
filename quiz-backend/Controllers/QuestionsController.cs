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
        // create local context
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }
        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            context.Questions.Add(new Models.Question() {Text = question.Text});
            context.SaveChanges();
        }

        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return new Models.Question[]
            {
                new Models.Question() {Text = "hello"},
                new Models.Question() { Text = "hi"}
                
            };
        }
    }
}
