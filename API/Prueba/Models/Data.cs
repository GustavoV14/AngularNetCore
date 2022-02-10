using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Models
{
    public class Articles
    {
        public string title { get; set; }
        public string description { get; set; }
        public string content { get; set; }
        public string url { get; set; }
        public string image { get; set; }
        public DateTime publishedAt { get; set; }
        public Source source { get; set; }

    }
    public class Data
    {
        public int totalArticles { get; set; }
        public IList<Articles> articles { get; set; }

    }
    public class Source
    {
        public string name { get; set; }
        public string url { get; set; }

    }

}
