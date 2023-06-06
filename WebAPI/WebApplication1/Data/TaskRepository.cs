using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using WebApplication1.Models;
using Task = WebApplication1.Models.Task;

namespace WebApplication1.Data
{
    public class TaskRepository
    {
        private const string DataFilePath = "tasks.json";
        private HashSet<Task> _tasks;

        public TaskRepository()
        {
            LoadTasks();
        }

        public IEnumerable<Task> GetAllTasks()
        {
            return _tasks;
        }

        public Task AddTask(Task task)
        {
            task.Id = GetNextTaskId();
            _tasks.Add(task);
            SaveTasks();

            return task;
        }

        public void UpdateTask(Task updatedTask)
        {
            SaveTasks();
        }

        public void DeleteTask(int taskId)
        {
            var taskToRemove = GetTaskById(taskId);

            if (taskToRemove != null)
            {
                _tasks.Remove(taskToRemove);
                SaveTasks();
            }
        }

        public Task GetTaskById(int taskId)
        {
            foreach (var task in _tasks)
            {
                if (task.Id == taskId)
                {
                    return task;
                }
            }

            return null;
        }

        private void LoadTasks()
        {
            if (File.Exists(DataFilePath))
            {
                var jsonData = File.ReadAllText(DataFilePath);
                _tasks = JsonConvert.DeserializeObject<HashSet<Task>>(jsonData);
            }
            else
            {
                _tasks = new HashSet<Task>();
            }
        }

        private void SaveTasks()
        {
            var jsonData = JsonConvert.SerializeObject(_tasks);
            File.WriteAllText(DataFilePath, jsonData);
        }

        private int GetNextTaskId()
        {
            var maxId = 0;

            foreach (var task in _tasks)
            {
                if (task.Id > maxId)
                {
                    maxId = task.Id;
                }
            }

            return maxId + 1;
        }
    }
}
