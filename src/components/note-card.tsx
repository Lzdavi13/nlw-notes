import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-800 p-5 flex flex-col text-left gap-3 overflow-hidden rounded-md relative outline-none hover:ring-2 hove:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </span>
        <p className="text-sm text-slate-400 leading-6">{note.content}</p>

        <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 text-slate-500 bg-slate-800 hover:text-slate-100">
            <X className="size-5 " />
          </Dialog.Close>
          <div className="flex flex-col flex-1 p-5 gap-3">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-sm text-slate-400 leading-6">{note.content}</p>
          </div>

          <button
            type="button"
            className="w-full text-center text-sm font-medium text-slate-300 bg-slate-800 py-4 outline-none group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
