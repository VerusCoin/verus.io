export default function Custom404() {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-5xl mx-auto text-left"
      style={{ height: 'calc(100vh - 350px' }}
    >
      <img
        src="/images/backgrounds/page-not-found.svg"
        alt="404"
        className="h-64"
      />
      <p className="pr-12 text-2xl md:pr-16">404 - Page Not Found</p>
    </div>
  );
}
