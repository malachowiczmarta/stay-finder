const NoRoomsFound = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto text-center">
      <h2 className="text-lg font-medium mb-4">No Rooms Found</h2>
      <p className="text-gray-500">
        We're sorry, but no rooms were found that match your selected filters.
      </p>
    </div>
  );
};

export default NoRoomsFound;
