export default function UserInfoMobile({
  name,
  email,
  xp,
}: {
  name: string;
  email: string;
  xp: number;
}) {
  return (
    <div>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 dark:text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {name ?? "Guest"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {email ?? "email@example.com"}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Points
          </span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {xp} XP
          </span>
        </div>
      </div>

      <button className="mt-4 w-full bg-primary text-dark font-semibold py-3 rounded-md text-sm">
        Logout
      </button>
    </div>
  );
}
