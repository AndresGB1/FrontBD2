import TopBar from "./TopBar";
import Container from "./Container";
export default function MainPage() {
  return (
    <div>
      <TopBar />
        <header className="App-header">
        <Container />
      </header>
    </div>
  );
}