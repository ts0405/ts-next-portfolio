type NeonButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NeonButton({ children, onClick }: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-cyan-400 border border-cyan-400 rounded-lg shadow-[0_0_10px_#0ff] hover:shadow-[0_0_20px_#0ff] transition-all duration-300"
    >
      {children}
    </button>
  );
}
