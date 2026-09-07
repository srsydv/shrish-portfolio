import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 grid min-h-[100svh] place-items-center px-6">
      <div className="text-center">
        <p className="kicker text-cyan">404</p>
        <h1 className="display mt-4 text-5xl text-foam">Lost on-chain.</h1>
        <p className="mt-4 text-mist">This route does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-void">
          Return home
        </Link>
      </div>
    </main>
  );
}
