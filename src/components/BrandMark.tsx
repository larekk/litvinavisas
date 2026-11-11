export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 23C6 12.5 14 5 24 5c10.5 0 18 7.5 18 18 0 1.9-.3 3.5-.7 5.2H6.7A20 20 0 0 1 6 23Z" fill="#F6AC45" />
      <path d="M12 34.5c5 1.3 13.8.8 19.2-1.4 3.1-1.2 6.6-1.1 9-.5-3.1 5.5-8.9 9.1-16.3 9.1-4.5 0-8.4-1.5-11.9-4.4 6.5 0 11-1.2 15.7-3.3-6.6 1-10.2.9-15.7.5Z" fill="#F6AC45" />
      <path d="M4.8 31.7c10-2.3 19.9-1.3 28.2 1.4-7.5.7-15.3 1.2-22.4.2L4.8 31.7Z" fill="#F6AC45" />
    </svg>
  );
}
