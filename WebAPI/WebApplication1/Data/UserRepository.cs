using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class UserRepository
    {
        private const string DataFilePath = "users.json";
        private List<User> _users;

        public UserRepository()
        {
            LoadUsers();
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _users;
        }

        public User AddUser(User user)
        {
            user.Id = GetNextUserId();
            _users.Add(user);
            SaveUsers();

            return user;
        }

        public void UpdateUser(User updatedUser)
        {
            var existingUser = _users.Find(u => u.Id == updatedUser.Id);

            if (existingUser != null)
            {
                existingUser.Email = updatedUser.Email;
                existingUser.FirstName = updatedUser.FirstName;
                existingUser.LastName = updatedUser.LastName;
                existingUser.PhoneNumber = updatedUser.PhoneNumber;
                existingUser.Password = updatedUser.Password;
                existingUser.Username = updatedUser.Username;

                SaveUsers();
            }
        }

        public void DeleteUser(int userId)
        {
            var userToRemove = _users.Find(u => u.Id == userId);

            if (userToRemove != null)
            {
                _users.Remove(userToRemove);
                SaveUsers();
            }
        }

        public User GetUserById(int userId)
        {
            return _users.FirstOrDefault(u => u.Id == userId);
        }

        private void LoadUsers()
        {
            if (File.Exists(DataFilePath))
            {
                var jsonData = File.ReadAllText(DataFilePath);
                _users = JsonConvert.DeserializeObject<List<User>>(jsonData);
            }
            else
            {
                _users = new List<User>();
            }
        }

        private void SaveUsers()
        {
            var jsonData = JsonConvert.SerializeObject(_users);
            File.WriteAllText(DataFilePath, jsonData);
        }

        private int GetNextUserId()
        {
            var maxId = 0;

            foreach (var user in _users)
            {
                if (user.Id > maxId)
                {
                    maxId = user.Id;
                }
            }

            return maxId + 1;
        }
    }
}
