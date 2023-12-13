import Main from "./main";
import Side from "./side";

export default function Home() {
  return (
    <main className={`bg-gray3 min-h-screen flex flex-row`}>
      <Side />
      <Main />
    </main>
  );
}
