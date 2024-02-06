import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="max-w-6xl mx-auto my-12 space-y-6">
      <img src={logo} />
      <form className="w-full">
        <input
          className="w-full bg-transparent font-semibold text-slate-500 text-3xl outline-none"
          type="text"
          placeholder="Busque por suas notas..."
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content: "Hellow World",
          }}
        />
      </div>
    </div>
  );
}
