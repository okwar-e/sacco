// app/contributions/page.tsx

export default function ContributionsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Contributions</h2>

            <div className="bg-white p-4 rounded shadow space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Contributions</span>
                    <span className="text-lg font-bold text-blue-600">KES 12,000</span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                    Contribute Now
                </button>
            </div>

            <section>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Contribution History</h3>
                <ul className="bg-white divide-y rounded shadow text-sm">
                    <li className="p-4">KES 1,000 on Aug 5, 2025</li>
                    <li className="p-4">KES 500 on Aug 1, 2025</li>
                    <li className="p-4">KES 1,000 on July 28, 2025</li>
                </ul>
            </section>
        </div>
    );
}
