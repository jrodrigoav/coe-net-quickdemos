using System.Text.Json.Serialization;

namespace QuickDemos.API.ViewModels
{
    public class CreatePhotoViewModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        
        [JsonPropertyName("albumId")]
        public int AlbumId { get; set; }
        
        [JsonPropertyName("title")]
        public string? AltText { get; set; }
        
        [JsonPropertyName("url")]
        public Uri Url { get; set; } = null!;
        
        [JsonPropertyName("thumbnailUrl")]
        public Uri Thumbnail { get; set; } = null!;
    }
}
