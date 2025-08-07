// app/loans/page.tsx

export default function LoansPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Loan Center</h2>

            <div className="bg-white p-4 rounded shadow space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Request a Loan</h3>
                <form className="space-y-3">
                    <input
                        type="number"
                        placeholder="Amount in KES"
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Reason"
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="date"
                        className="w-full border rounded px-3 py-2"
                    />
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                        Submit Loan Request
                    </button>
                </form>
            </div>

            <section>
                <h3 className="text-lg font-semibold text-gray-700">Active Loans</h3>
                <ul className="bg-white divide-y rounded shadow text-sm">
                    <li className="p-4">
                        Loan: KES 5,000 · Due: Sept 5, 2025
                        <button className="ml-4 text-blue-600 underline">Repay</button>
                    </li>
                </ul>
            </section>
        </div>
    );
}
