using Microsoft.AspNetCore.Mvc;

namespace Separate_Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 6).Select(index => new WeatherForecast
            {
                Id = index,
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [Produces("application/json")]
        [HttpGet("GetDataByString")]
        public IActionResult GetDataByString(string? request)
        {
            if (request != null)
            {
                var lenght = request.Length;
                var state = lenght > 5 ? "Нормальная длина" : "нужно еще букавок";


                var data = new { Data = request, State = state, length = lenght };
                return new JsonResult(data);

            }
            return BadRequest();
        }
    }
}
