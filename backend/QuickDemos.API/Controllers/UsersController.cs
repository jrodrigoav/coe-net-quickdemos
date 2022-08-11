using Microsoft.AspNetCore.Mvc;
using QuickDemos.API.Services;

namespace QuickDemos.API.Controllers
{
    [Route("api/users"), ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _usersService;

        public UsersController(UsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpPost("importcsv")]
        public IActionResult ImportUsers(IFormFile csvfile)
        {
            //var validationResults =  _usersService.ImportUsers(csvfile);
            //return Created("", validationResults);
            return Created("", null);
        }
    }
}
