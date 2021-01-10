using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend
{
    public class QuizContext : DbContext
    {
      //  internal readonly IEnumerable<Quiz> Quiz;

        public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }
        
            public DbSet<Models.Question> Questions { get; set; }
        public DbSet<Models.Quiz> Quiz { get; set; }
    
    }
       
    
}
