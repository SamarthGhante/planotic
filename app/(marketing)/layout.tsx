interface childrenProp {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: childrenProp) {
  return (
    <div className="h-full bg-slate-100">
      <main>{children}</main>
    </div>
  );
}
