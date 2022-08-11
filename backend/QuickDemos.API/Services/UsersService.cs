using FluentValidation.Results;
using QuickDemos.API.ViewModels;

namespace QuickDemos.API.Services
{
    public class UsersService
    {
        private readonly UserValidatorService _validatorService;

        public UsersService(UserValidatorService validatorService)
        {
            _validatorService = validatorService;
        }

        public ValidationResult ImportUsers(IFormFile csvFile)
        {
            //return _validatorService.Validate(userViewModel);
            return new ValidationResult();
        }
    }
}
