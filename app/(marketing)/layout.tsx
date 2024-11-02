interface childrenProp {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: childrenProp) {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
    </div>
  );
}
