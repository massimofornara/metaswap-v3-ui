export function Populations() {
  const items = [
    { name: "Traders", description: "Utenti che effettuano swap di token sulla piattaforma." },
    { name: "Liquidity Providers", description: "Utenti che forniscono liquidità alle pool e guadagnano commissioni." },
    { name: "Developers", description: "Sviluppatori che integrano MetaSwap V3 nei propri progetti." },
  ];

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.name} className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
