interface GradientOrbsProps {
  variant?: 'hero' | 'section';
}

export default function GradientOrbs({ variant = 'section' }: GradientOrbsProps) {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
    </div>
  );
}
