interface TagProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Tag({ children, center = false }: TagProps) {
  return (
    <div className="tag" style={center ? { justifyContent: "center" } : {}}>
      {children}
    </div>
  );
}