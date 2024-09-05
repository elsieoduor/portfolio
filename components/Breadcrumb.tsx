'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
  const router = useRouter();

  return (
    <nav className="mb-4">
      <ol className="flex space-x-2 text-gray-600">
        <li>
          <button
            onClick={() => router.push('/projects')}
            className="text-blue-500 hover:underline"
          >
            Projects
          </button>
        </li>
        <li>/</li>
        <li className="text-gray-500">Project Details</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
