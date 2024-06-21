import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../services/articlesApi";

function TopicsPage() {
  
  const [topics, setTopics] = useState([])

useEffect(() => {
  getTopics()
  .then((response) => {
    setTopics(response.data.topics)
  })
}, [])

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsPage;
