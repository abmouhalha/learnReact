using Microsoft.AspNetCore.Mvc;
using learnReact.Models;
using System.Collections.Generic;
using System.Linq;

namespace learnReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShipController : ControllerBase
    {
        private static readonly IEnumerable<Ship> Ships = new[]
        {
            new Ship { Id = 1, Type = "Cuirasse", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0, 0, 0 } }},
            new Ship { Id = 2, Type = "Croiseurs", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0, 0 } }},
            new Ship { Id = 3, Type = "Croiseurs", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0, 0 } }},
            new Ship { Id = 4, Type = "Torpilleurs", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0 } }},
            new Ship { Id = 5, Type = "Torpilleurs", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0 } }},
            new Ship { Id = 6, Type = "Torpilleurs", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0, 0 } }},
            new Ship { Id = 7, Type = "SousMarin", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0 } }},
            new Ship { Id = 8, Type = "SousMarin", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0 } }},
            new Ship { Id = 9, Type = "SousMarin", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0 } }},
            new Ship { Id = 10, Type = "SousMarin", Position = new int[] { 0, 0 }, ShipArray = new int[][] { new int[] { 0 } }}
        };

        [HttpGet("{shipType}")]
        public IEnumerable<Ship> Get(string shipType)
        {
            var filteredShips = Ships.Where(i => i.Type == shipType);
            return filteredShips;
        }
    }
}
