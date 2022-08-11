using Microsoft.AspNetCore.Mvc;
using QuickDemos.API.ViewModels;

namespace QuickDemos.API.Controllers
{
    [Route("api/photos"), ApiController]
    public class PhotosController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreatePhoto(CreatePhotoViewModel createPhotoViewModel)
        {            
            return Ok(createPhotoViewModel);
        }
    }
}
