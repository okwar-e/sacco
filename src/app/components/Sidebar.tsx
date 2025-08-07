// app/components/Sidebar.tsx
import Link from 'next/link';

const navItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Contributions', href: '/contributions' },
    { name: 'Loans', href: '/loans' },
    { name: 'Governance', href: '/governance' },
    { name: 'Profile', href: '/profile' },
];

export default function Sidebar() {
    return (
        <aside className="hidden md:flex md:w-64 h-screen bg-white border-r">
            <div className="flex flex-col p-4 space-y-6">
                <h1 className="text-xl font-bold text-blue-600">SaccoDAO</h1>
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
