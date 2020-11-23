export default function Custom404() {
  return (
    <div
      className="flex items-center justify-center max-w-5xl mx-auto"
      style={{ height: 'calc(100vh - 350px' }}
    >
      <img
        src="/images/backgrounds/page-not-found.svg"
        alt="404"
        className="h-64"
      />
    </div>
  );
}
