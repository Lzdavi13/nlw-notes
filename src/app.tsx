import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNote] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  const [search, setSearch] = useState("");

  function onNoteCreated(content: string): void {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: content,
    };

    const arrayNotes = [newNote, ...notes];

    setNote(arrayNotes);

    localStorage.setItem("notes", JSON.stringify(arrayNotes));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="max-w-6xl mx-auto my-12 space-y-6">
      <img src={logo} />
      <form className="w-full">
        <input
          className="w-full bg-transparent font-semibold text-slate-500 text-3xl outline-none"
          type="text"
          placeholder="Busque por suas notas..."
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
