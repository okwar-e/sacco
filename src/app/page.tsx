// app/page.tsx
export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Your Contributions</h3>
          <p className="text-xl font-bold text-blue-600">KES 12,000</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Active Loans</h3>
          <p className="text-xl font-bold text-yellow-600">KES 5,000</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Next Repayment Due</h3>
          <p className="text-xl font-bold text-red-600">Aug 15, 2025</p>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Activity</h3>
        <ul className="bg-white divide-y rounded shadow">
          <li className="p-4 text-sm">Contributed KES 1,000 - Aug 2, 2025</li>
          <li className="p-4 text-sm">Voted on Loan Proposal #12 - Aug 1, 2025</li>
          <li className="p-4 text-sm">Repaid KES 500 - July 30, 2025</li>
        </ul>
      </section>
    </div>
  );
}
