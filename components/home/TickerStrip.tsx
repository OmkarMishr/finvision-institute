import { TICKER_ITEMS } from "@/lib/data";

export default function TickerStrip() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker-strip">
      <div className="ticker-track" id="ticker">
        {doubled.map((d, i) => (
          <span key={i} className="ticker-item">{d}</span>
        ))}
      </div>
    </div>
  );
}
