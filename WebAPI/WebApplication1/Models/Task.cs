using System;

using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace WebApplication1.Models
{
    public class Task
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("title")]
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("dueDate")]
        public DateTime? DueDate { get; set; }
    }
}
