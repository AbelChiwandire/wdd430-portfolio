export default function Loading() {
    return (
        <main className="w-full max-w-4xl mx-auto">
            <h1 className="w-2/5 h-8 mb-4 bg-slate-200 rounded animate-pulse"></h1>
            <p className="w-3/4 h-5 bg-slate-200 rounded animate-pulse"></p>
            <ul className="mt-4">
                <li className="mb-2">
                    <h2 className="w-1/2 h-6 mb-2 bg-slate-200 rounded animate-pulse"></h2>
                    <p className="w-full h-5 mb-2 bg-slate-200 rounded animate-pulse"></p>
                    <p className="w-2/5 h-5 bg-slate-200 rounded animate-pulse"></p>
                </li>
            </ul>
        </main>
    )
}