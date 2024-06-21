// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getArticles } from "../services/articlesApi";


// export function TopicDetailPage() {
//     const {topicSlug} = useParams()
//     const [articles, setArticles] = useState([])

//     useEffect(() => {
//     getArticles(({topic: topicSlug}))
//     .then((response) => {
//         setArticles(response.data.articles)
//     })
//     .catch((error) => {
//         console.error(`Error fetching ${topicSlug}`, error)
//     })
// }, [topicSlug])

// return (
//     <tbody>
//       {articles.map((article) => (
//         <tr key={article.article_id}>
//           <td>
//             <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
//           </td>
//           <td>
//             <img src={article.article_img_url} alt={article.title} />
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   );

// }

