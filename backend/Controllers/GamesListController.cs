using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Npgsql;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class GamesListController : ControllerBase
{
    // private static readonly string[] Summaries = new[]
    // {
    //     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    // };
    private readonly AppDbContext _context;
    // private readonly ILogger<GamesListController> _logger;
    // public GamesListController(ILogger<GamesListController> logger)
    // {
    //     _logger = logger;
    // } 
    public GamesListController(AppDbContext context)
    {
        _context = context;
    } 

        // GET: api/GamesList
        [HttpGet(Name = "GetGamesList")]
        public async Task<ActionResult<IEnumerable<GamesList>>> GetGamesList()
        {
            return await _context.gamess.ToListAsync();
        }

        // GET: api/GamesList/{studio_name}
        // [HttpGet("{studio_name}")]
        // public async Task<ActionResult<GamesList>> GetGamesListByStudioName(string studio_name)
        // {
        //     var gamesByStudio = await _context.gamess.FindAsync(studio_name);

        //     if (gamesByStudio == null)
        //     {
        //         return NotFound();
        //     }

        //     return gamesByStudio;
        // }

    [HttpPost(Name = "PostGamesList")]
    public IEnumerable<GamesList> Set()
    {

        return Enumerable.Range(1, 5).Select(index => new GamesList
        {
            game_title = "",
            genre = "",  
            platform = "",
            release_date = "",
            description = "",
            studio_name = "",
            image_url = "",
            rating = 0,
            price = 0
        })
        .ToArray();
    }

}
