import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] =
    useState<boolean>(true);
  const [content, setContent] = useState<string>("");

  function handleStarEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    if (!content) {
      return;
    }
    toast.success("Nota criada com sucesso");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 p-5 rounded-md flex flex-col text-left gap-3 outline-none hover:ring-2 hove:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm text-slate-400 leading-6">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 text-slate-500 bg-slate-800 hover:text-slate-100 outline-none">
            <X className="size-5 " />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-col flex-1 p-5 gap-3">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-sm text-slate-400 leading-6">
                  Comece{" "}
                  <button className="text-lime-400 font-medium hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleStarEditor}
                    className="text-lime-400 font-medium hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="flex-1 text-sm text-slate-400 resize-none bg-transparent outline-none"
                  onChange={handleContentChanged}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full text-center text-sm font-medium text-lime-950 bg-lime-400 py-4 outline-none hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
