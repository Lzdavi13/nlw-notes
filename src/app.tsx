import logo from "./assets/logo-nlw-expert.svg";

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
        <div className="bg-slate-700 p-5 rounded-md">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm text-slate-400 mt-3 leading-6">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
        <div className="bg-slate-800 p-5 overflow-hidden rounded-md relative">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm text-slate-400 mt-3 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            dolorum perferendis mollitia nisi. Quia eius ab, ipsum et fugit
            perferendis. Quia vero laboriosam quo harum a in exercitationem
            officiis blanditiis?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Hic dolorum perferendis mollitia nisi. Quia eius
            ab, ipsum et fugit perferendis. Quia vero laboriosam quo harum a in
            exercitationem officiis blanditiis?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Hic dolorum perferendis mollitia nisi.
            Quia eius ab, ipsum et fugit perferendis. Quia vero laboriosam quo
            harum a in exercitationem officiis blanditiis?
          </p>

          <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
        <div className="bg-slate-800 p-5 overflow-hidden rounded-md relative">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm text-slate-400 mt-3 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            dolorum perferendis mollitia nisi. Quia eius ab, ipsum et fugit
            perferendis. Quia vero laboriosam quo harum a in exercitationem
            officiis blanditiis?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Hic dolorum perferendis mollitia nisi. Quia eius
            ab, ipsum et fugit perferendis. Quia vero laboriosam quo harum a in
            exercitationem officiis blanditiis?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Hic dolorum perferendis mollitia nisi.
            Quia eius ab, ipsum et fugit perferendis. Quia vero laboriosam quo
            harum a in exercitationem officiis blanditiis?
          </p>

          <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
        <div className="bg-slate-800 p-5 overflow-hidden rounded-md relative">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm text-slate-400 mt-3 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            dolorum perferendis mollitia nisi. Quia eius ab, ipsum et fugit
            perferendis. Quia vero laboriosam quo harum a in exercitationem
            officiis blanditiis?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Hic dolorum perferendis mollitia nisi. Quia eius
            ab, ipsum et fugit perferendis. Quia vero laboriosam quo harum a in
            exercitationem officiis blanditiis?Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Hic dolorum perferendis mollitia nisi.
            Quia eius ab, ipsum et fugit perferendis. Quia vero laboriosam quo
            harum a in exercitationem officiis blanditiis?
          </p>

          <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
