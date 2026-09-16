import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';

export const dynamic = 'force-dynamic';

function SchoolProjectListSkeleton() {
    return (
        <div className="mt-4 space-y-4 animate-pulse" aria-label="Loading school projects">
            {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2">
                    <div className="h-6 w-1/3 rounded bg-slate-200" />
                    <div className="h-4 w-full rounded bg-slate-200" />
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                </div>
            ))}
        </div>
    );
}

export default function SchoolPage() {
    return (
        <main>
            <h1 className="text-3xl font-bold mb-4">School Projects</h1>
            <p className="text-lg text-slate-600">
                Here you can find a list of my school-related projects and assignments.
            </p>
            <Suspense fallback={<SchoolProjectListSkeleton />}>
                <SchoolProjectList />
            </Suspense>
        </main>
    );
}