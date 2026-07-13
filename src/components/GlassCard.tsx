interface Props {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export default function GlassCard({ children, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag className={`bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg shadow-black/5 ${className}`}>
      {children}
    </Tag>
  );
}
