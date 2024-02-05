import ImageCarrousel from "./ui/ImageCarrousel";
import ItemSummary from "./ui/ItemSummary";
import ItemsList from "./ui/ItemsList";
import OptionsPanel from "./ui/OptionsPanel";
import PreviewPanel from "./ui/PreviewPanel";

export default function Home() {
  return (
    <div className="flex flex-col h-full mt-3 mx-10 gap-4">
      <div className="flex flex-row basis-7/12 justify-center gap-4">
        <div className="border flex-grow border-black">
          <OptionsPanel />
        </div>
        <div className="basis-2/6 flex-grow border border-black">
          <PreviewPanel />
        </div>
      </div>
      <div className="flex flex-row basis-3/12 justify-center gap-4">
        <div className="border flex-grow border-black">
          <ItemSummary />
        </div>
        <div className="basis-2/6 flex-grow border border-black">
          <ImageCarrousel />
        </div>
      </div>
      <div className="flex flex-row basis-2/12 justify-center">
        <div className="border flex-grow border-black">
          <ItemsList />
        </div>
      </div>
    </div>
  );
}
