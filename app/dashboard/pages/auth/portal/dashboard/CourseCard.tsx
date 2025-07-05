// app/dashboard/components/CourseCard.tsx
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  status: string;
  progress: number;
}

export default function CourseCard({ title, status, progress }: CourseCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 text-black">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{status}</p>
      <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <Link href="/dashboard/courses">
        <div className="text-blue-500 text-sm font-semibold mt-2 inline-block">View Details</div>
      </Link>
    </div>
  );
}
