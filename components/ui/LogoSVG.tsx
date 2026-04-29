export default function LogoSVG({ className = "logo-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.lkorg/2000/svg">
      <polygon points="4,0 36,0 28,12 12,12" fill="#C0334D" />
      <polygon points="4,0 12,12 4,22" fill="#8B2236" />
      <polygon points="4,22 12,12 24,28 12,44 4,44" fill="#C0334D" />
    </svg>
  );
}
