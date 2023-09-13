export const metadata = {
  title: 'Todo App',
};

export default function TodoLayout({children}) {
  return (
    <div className="container mx-auto my-2">
      <h1 className="text-3xl font-bold mb-3">Todo App</h1>
      {children}
    </div>
  );
}
