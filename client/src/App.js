import "./styles.css";
import MessageModule from "./components/MessageModule";

const MESSAGES = [
  { content: "Je suis le premier message", author: "Bonjour" },
  { content: "Je suis le second message", author: "Au Revoir" },
  { content: "Je suis le troisième message", author: "Deja" },
  { content: "Je suis le quatrième message", author: "Quoi" },
  { content: "Je suis le cinquième message", author: "Que" }
];

function App() {
  return (
    <div>
      <MessageModule messages={MESSAGES} />;
    </div>
  );
}

export default App;