
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using API.Models;

namespace Prueba.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClocksController : ControllerBase
    {
        private readonly ILogger<ClocksController> _logger;

        public ClocksController(ILogger<ClocksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/GetClocks")]
        public IActionResult GetClocks()
        {
            Data data = new Data();
            try { 
                using (var httpClient = new HttpClient())
                {
                    var Request = httpClient.GetAsync("https://gnews.io/api/v4/search?q=relojes&lang=es&token=485c56cab047ffc9d557cbae27c3419c");
                    var Response = Request.Result.Content.ReadAsStringAsync();
                    Request.Wait();
                    data = JsonConvert.DeserializeObject<Data>(Response.Result);
                    Console.WriteLine($"Response:{Response.Result} ");
                }
                return Ok(data);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
        }
    }
}
