// app/profile/page.tsx

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Profile</h2>

            <div className="bg-white p-4 rounded shadow space-y-3">
                <div className="text-sm">
                    <p><span className="font-semibold text-gray-700">Name:</span> Collins Okware</p>
                    <p><span className="font-semibold text-gray-700">Wallet Address:</span> 0x123...456</p>
                    <p><span className="font-semibold text-gray-700">Total Contributions:</span> KES 12,000</p>
                    <p><span className="font-semibold text-gray-700">Total Repaid:</span> KES 2,500</p>
                </div>

                <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded">
                    Log Out
                </button>
            </div>
        </div>
    );
}
