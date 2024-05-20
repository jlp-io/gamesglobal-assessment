using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Npgsql;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class GamesListController : ControllerBase
{
    private readonly AppDbContext _context;

    public GamesListController(AppDbContext context)
    {
        _context = context;
    } 

    // CRUD endpoints

    // GET: api/GamesList
    [HttpGet(Name = "GetGamesList")]
    public async Task<ActionResult<IEnumerable<GamesList>>> GetGamesList()
    {
        return await _context.gamess.ToListAsync();
    }

    //GET: api/GamesList/{studio_name}
    [HttpGet("{studio_name}")]
    public async Task<ActionResult<IEnumerable<GamesList>>> GetGamesListByStudioName(string studio_name)
    {
        var gamesByStudio = await _context.gamess.Where(x => x.studio_name == studio_name).ToListAsync();
        if (gamesByStudio == null)
        {
            return NotFound();
        }
        return gamesByStudio;
    }

    //POST: api/GamesList
    [HttpPost(Name = "PostGamesList")]
    public async Task<ActionResult<IEnumerable<GamesList>>> PostGamesList(GamesList game)
    {
    _context.gamess.Add(game);
    await _context.SaveChangesAsync();
    //    return CreatedAtAction("PostTodoItem", new { id = todoItem.Id }, todoItem);
    return CreatedAtAction(nameof(PostGamesList), new { id = game.id }, game);
    }

    //PUT: api/GamesList
    [HttpPut(Name = "PutGamesList")]
    public async Task<ActionResult<IEnumerable<GamesList>>> PutGamesList(int id, GamesList game)
    {
    if (id != game.id)
    {
        return BadRequest();
    }

    _context.Entry(game).State = EntityState.Modified;
    try
    {
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!GamesListExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }
    return NoContent();
    }

    private bool GamesListExists(int id)
    {
        return _context.gamess.Any(e => e.id == id);
    }

    //DELETE: api/GamesListDelete
    [HttpDelete(Name = "DeleteGamesList")]
    public async Task<ActionResult<IEnumerable<GamesList>>> DeleteGamesList(int id)
    {
    var gamesList = await _context.gamess.FindAsync(id);
    if (gamesList == null)
    {
        return NotFound();
    }
    _context.gamess.Remove(gamesList);
    await _context.SaveChangesAsync();
    return NoContent();
    }

}
