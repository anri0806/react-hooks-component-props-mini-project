import React from "react";

function emoji(minutes) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const times = minutes < 30 ? 5 : 10;

  /* minutes => 5, 15, 47 */

  let emojis = "";
  for (let i = 0; i < minutes; i +=times) {
    emojis += emoji;
  }

  return emojis;
}

function Article({ title, date = "January 1, 1970", minutes, preview }) {
  const emojis = emoji(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} ·</small>
      <small>{" "}{emojis} {minutes} minutes read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
