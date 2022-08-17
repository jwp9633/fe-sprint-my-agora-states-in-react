import { useState } from "react";
import Discussion from "./Discussion";

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);

  fetch("http://localhost:4000/discussions")
    .then((res) => res.json())
    .then((data) => {
      setDiscussions(data);
    });

  const discussionRenderer = (discussion) => {
    return <Discussion key={discussion.id} discussion={discussion} />;
  };

  return <ul className="discussions">{discussions.map(discussionRenderer)}</ul>;
};

export default Discussions;
