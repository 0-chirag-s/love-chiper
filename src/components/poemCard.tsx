

export const PoemCard = ({ poem }: {
    poem: string
}) => (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      <div className="whitespace-pre-line text-center text-gray-800 text-lg font-medium">
        {poem}
      </div>
    </div>
  );