using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;
using Task = WebApplication1.Models.Task;

namespace WebApplication1.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskRepository _repository;

        public TasksController()
        {
            _repository = new TaskRepository();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Task>> GetAllTasks()
        {
            var tasks = _repository.GetAllTasks();
            return Ok(tasks);
        }

        [HttpPost]
        public ActionResult<Task> AddTask(Task task)
        {
            var addedTask = _repository.AddTask(task);
            return Ok(addedTask);
        }

        [HttpPut("{id}")]
        public ActionResult<Task> UpdateTask(int id, Task updatedTask)
        {
            var existingTask = _repository.GetTaskById(id);

            if (existingTask == null)
            {
                return NotFound();
            }

            existingTask.Title = updatedTask.Title;
            existingTask.Description = updatedTask.Description;
            existingTask.DueDate = updatedTask.DueDate;

            _repository.UpdateTask(existingTask);

            return Ok(existingTask);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTask(int id)
        {
            var existingTask = _repository.GetTaskById(id);

            if (existingTask == null)
            {
                return NotFound();
            }

            _repository.DeleteTask(id);

            return NoContent();
        }
    }
}