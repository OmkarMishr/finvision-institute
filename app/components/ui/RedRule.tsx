export default function RedRule({ center = false }: { center?: boolean }) {
  return <div className={`red-rule${center ? " center" : ""}`} />;
}