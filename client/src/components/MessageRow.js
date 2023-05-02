function MessageRow({ message }) {
  const author = message.author;
  const content = message.content;
  return (
    <tr>
      <td span className="author">
        {author} :
      </td>
      <td>{content}</td>
    </tr>
  );
}

export default MessageRow;
