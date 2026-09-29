'use client';

import type { State } from '@/lib/actions';

type ProjectFormProps = {
    formAction: (formData: FormData) => void;
    state: State;
    isPending: boolean;
    initialValues?: {
        title?: string;
        description?: string;
        technologies?: string;
        type?: 'opensource' | 'school';
        yearCompleted?: number;
        link?: string;
    };
};

export function ProjectForm({
    formAction,
    state,
    isPending,
    initialValues,
}: ProjectFormProps) {
    return (
        <form action={formAction} className="max-w-xl space-y-4">
            <div>
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    defaultValue={initialValues?.title}
                    required
                    aria-describedby="title-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
                <div id="title-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.title?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={initialValues?.description}
                    required
                    rows={4}
                    aria-describedby="description-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
                <div
                    id="description-error"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state.errors?.description?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="technologies"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Technologies (comma-separated)
                </label>
                <input
                    id="technologies"
                    name="technologies"
                    type="text"
                    defaultValue={initialValues?.technologies}
                    required
                    aria-describedby="technologies-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
                <div
                    id="technologies-error"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state.errors?.technologies?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="type"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Category
                </label>
                <select
                    id="type"
                    name="type"
                    defaultValue={initialValues?.type ?? ''}
                    required
                    aria-describedby="type-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                >
                    <option value="">Select a category</option>
                    <option value="opensource">OpenSource</option>
                    <option value="school">School</option>
                </select>
                <div id="type-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.type?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="yearCompleted"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Year Completed
                </label>
                <input
                    id="yearCompleted"
                    name="yearCompleted"
                    type="number"
                    defaultValue={initialValues?.yearCompleted}
                    required
                    aria-describedby="yearCompleted-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
                <div
                    id="yearCompleted-error"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state.errors?.yearCompleted?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <label
                    htmlFor="link"
                    className="block text-sm font-medium text-slate-700 mb-1"
                >
                    Project Link
                </label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    defaultValue={initialValues?.link}
                    required
                    aria-describedby="link-error"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                />
                <div
                    id="link-error"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state.errors?.link?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>
            </div>

            {state.message ? (
                <p className="text-sm text-red-600">{state.message}</p>
            ) : null}

            <button
                type="submit"
                disabled={isPending}
                className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPending ? 'Saving...' : 'Save Project'}
            </button>
        </form>
    );
}