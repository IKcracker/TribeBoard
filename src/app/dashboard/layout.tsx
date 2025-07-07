export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-screen overflow-hidden bg-background">
      {children}
    </main>
  );
}
