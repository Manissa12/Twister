import MessageRow from "./MessageRow";

function MessageTab({ messages }) {
  const rows = [];
  messages.forEach((message) => {
    rows.push(<MessageRow message={message} />);
  });
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default MessageTab;
