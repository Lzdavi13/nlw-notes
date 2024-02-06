export function NoteCard() {
  return (
    <div className="bg-slate-800 p-5 overflow-hidden rounded-md relative outline-none hover:ring-2 hove:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm text-slate-400 mt-3 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic dolorum
        perferendis mollitia nisi. Quia eius ab, ipsum et fugit perferendis.
        Quia vero laboriosam quo harum a in exercitationem officiis
        blanditiis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
        dolorum perferendis mollitia nisi. Quia eius ab, ipsum et fugit
        perferendis. Quia vero laboriosam quo harum a in exercitationem officiis
        blanditiis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
        dolorum perferendis mollitia nisi. Quia eius ab, ipsum et fugit
        perferendis. Quia vero laboriosam quo harum a in exercitationem officiis
        blanditiis?
      </p>

      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
}
