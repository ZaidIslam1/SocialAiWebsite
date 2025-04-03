export default function UsageStats() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Usage Statistics</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Total Generations</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
            </dl>
          </div>
        </div>
        <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Remaining Credits</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">88</dd>
            </dl>
          </div>
        </div>
        <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">Current Plan</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">Creator</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
