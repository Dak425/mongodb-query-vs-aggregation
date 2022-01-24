db.podcasts.insertMany([
	{id: 1, name: "Podcast 1", category: "Business", rss: "https://mypodcast1.com/podcast/rss"},
	{id: 2, name: "Podcast 2", category: "Business", rss: "https://podcast2.net/rss"},
	{id: 3, name: "Podcast 3", category: "Health & Wellness", rss: "https://podcast3.xyz/feed/rss"},
	{id: 4, name: "Podcast 4", category: "Technology", rss: "https://podcast4.com/rss"}
]);

db.episodes.insertMany([
	{podcast_id: 3, title: "Anabolic Recipes", published_on: "2020-01-02"},
	{podcast_id: 4, title: "Getting Going with Go", published_on: "2021-02-24"},
	{podcast_id: 1, title: "Talk About Money Early", published_on: "2022-01-01"},
	{podcast_id: 1, title: "Charge More by Saying No", publshed_on: "2021-12-01"},
	{podcast_id: 2, title: "Candidate Interview Strategies", published_on: "2020-05-01"},
	{podcast_id: 4, title: "The Magic of Pattern Matching", published_on: "2022-01-01"}
]);
