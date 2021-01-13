using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);

            if (quiz == null)
                return NotFound();
            
            context.Questions.Add(question);
           await context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
        
             return context.Questions;
           
        }

        [HttpGet("{quizId}")]
        public IEnumerable<Models.Question> Get([FromRoute] int quizId)
        {

            return context.Questions.Where(q=>q.QuizId == quizId);

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if (id != question.ID)
                return BadRequest();
           // var question = await context.Questions.SingleOrDefaultAsync(q => q.ID == id);
            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question);

        }
    }
}
