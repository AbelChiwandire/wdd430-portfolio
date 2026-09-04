import Education from '../../components/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about Abel Chiwandire',
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-slate-800 mb-6">
        I am a passionate software developer with a strong interest in building web applications and exploring new technologies.
      </p>
      <Education degreeTitle="Bachelor of Science in Software Development" courses={['Web Frontend Development', 'Web Backend Development', 'Web Services', 'Web Full-Stack Development']} />
    </main>
  );
}