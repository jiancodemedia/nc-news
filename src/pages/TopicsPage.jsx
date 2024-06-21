import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../services/articlesApi";
import "./TopicsPage.css"

function TopicsPage() {
  
  const [topics, setTopics] = useState([])

useEffect(() => {
  getTopics()
  .then((response) => {
    setTopics(response.data.topics)
  })
}, [])

  return (
    <div className="topics-page">
      <h1 className="topic-header">Topics</h1>
      <div className="topics-list" >
        {topics.map((topic) => (
          <ul>
            
              <Link key={topic.slug} to={`/topics/${topic.slug}`} className="topic-button">
              {topic.slug}
              </Link>
            
          </ul>
            
    
        ))}
      </div>
    </div>
  );
}

export default TopicsPage;
