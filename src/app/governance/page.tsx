// app/governance/page.tsx

export default function GovernancePage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Governance</h2>

            <div className="bg-white p-4 rounded shadow space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Create Proposal</h3>
                <form className="space-y-3">
                    <input
                        type="text"
                        placeholder="Proposal Title"
                        className="w-full border rounded px-3 py-2"
                    />
                    <textarea
                        placeholder="Proposal Description"
                        className="w-full border rounded px-3 py-2"
                    ></textarea>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                        Submit Proposal
                    </button>
                </form>
            </div>

            <section>
                <h3 className="text-lg font-semibold text-gray-700">Active Proposals</h3>
                <ul className="bg-white divide-y rounded shadow text-sm">
                    <li className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium">Proposal #12: Approve Loan for Mary</p>
                            <p className="text-gray-500">Ends: Aug 10, 2025</p>
                        </div>
                        <div className="space-x-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Vote Yes</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Vote No</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
