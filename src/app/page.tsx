import Image from "next/image";
import Comp1 from './components/Comp1/Comp1';
import Comp2 from './components/Comp2/Comp2';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
      <Comp1/>
      <Comp2/>
    </div>
  );
}
