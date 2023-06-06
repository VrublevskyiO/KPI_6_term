using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserRepository _repository;

        public UsersController()
        {
            _repository = new UserRepository();
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var users = _repository.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            var user = _repository.GetUserById(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> AddUser(User user)
        {
            var newUser = _repository.AddUser(user);
            return Ok(newUser);
        }

        [HttpPut("{id}")]
        public ActionResult<User> UpdateUser(int id, User updatedUser)
        {
            var existingUser = _repository.GetUserById(id);

            if (existingUser == null)
            {
                return NotFound();
            }

            existingUser.Email = updatedUser.Email;
            existingUser.FirstName = updatedUser.FirstName;
            existingUser.LastName = updatedUser.LastName;
            existingUser.PhoneNumber = updatedUser.PhoneNumber;
            existingUser.Password = updatedUser.Password;
            existingUser.Username = updatedUser.Username;

            _repository.UpdateUser(existingUser);

            return Ok(existingUser);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            var existingUser = _repository.GetUserById(id);

            if (existingUser == null)
            {
                return NotFound();
            }

            _repository.DeleteUser(id);

            return NoContent();
        }

    }
}
