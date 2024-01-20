import Image from "next/image";

export default function Home() {
  const testStr = process.env.TEST_STR;

  return (
    <main className="bg-yellow-500">
      <div>Testing App</div>
      <div>{testStr}</div>
    </main>
  );
}
