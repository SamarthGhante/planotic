import { Navbar } from "./_components/navbar";

interface childrenProp {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: childrenProp) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* TODO: footer */}
    </div>
  );
}
