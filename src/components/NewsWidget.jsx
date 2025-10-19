import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsWidget() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using a public RSS-to-JSON API wrapper (no API key needed)
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews"
        );
        setArticles(response.data.items.slice(0, 5)); // Limit to 5 articles
      } catch (error) {
        console.error("Error fetching cybersecurity news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section
      id="news"
      className="mt-12 border-t border-slate-800 pt-8 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-xl font-semibold text-slate-200 mb-4">
        Latest <span className="text-cyan-400">Cybersecurity News</span>
      </h2>

      <div className="space-y-3">
        {articles.length > 0 ? (
          articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-slate-800 hover:border-cyan-500/40 rounded-lg p-3 bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
            >
              <h3 className="text-slate-100 font-medium group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2 mt-1">
                {article.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
              </p>
            </a>
          ))
        ) : (
          <p className="text-slate-500 text-sm">Fetching the latest updates...</p>
        )}
      </div>
    </section>
  );
}
