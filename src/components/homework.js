import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
    { id: 4, text: "Это четвертый комментарий" },
  ]);

  function delComment(id) {
    const newComments = comments.filter((comments) => comments.id !== id);
    setComments(newComments)
  }

  return comments.map((comments) => (
    <div className="comments">
      <ul className="ul">
        <li key={comments.id}>{comments.text}</li>
        <button className="btn__delete" onClick={() => delComment(comments.id)}>
          delete comment
        </button>
      </ul>
    </div>
  ));
}

export default Comments;