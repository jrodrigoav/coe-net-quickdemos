using FluentValidation;
using QuickDemos.API.ViewModels;

namespace QuickDemos.API.Services
{
    public class UserValidatorService : AbstractValidator<UserViewModel>
    {
        public UserValidatorService()
        {
            RuleFor(x => x.Id)
                .Must((id) => id > 0).WithMessage("Id must be greater than 0")
                .NotEmpty().WithMessage("Id is required");            
            RuleFor(x => x.Username)
                .Matches("^[A-Za-z0-9_-]*$").WithMessage("'{PropertyName}' only accepts characters and numbers.")
                .Matches("^[A-Za-z]").WithMessage("'{PropertyName}' must start with a letter.")
                .MaximumLength(150).WithMessage("'{PropertyName}' maximum length is 150 characters.");                
            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("A valid email is required");
        }
    }
}
