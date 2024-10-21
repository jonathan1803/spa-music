export const Card = ({ album, artist, srcImg }) => {
    return (
      <div className="flex flex-col items-center pt-4 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out">
        <img 
          src={srcImg} 
          alt={album} 
          className="w-48 h-48 object-cover rounded-md mb-4" 
        />
        <p className="text-center text-white text-sm font-semibold truncate w-full">
          {album}
        </p>
        <p className="text-center text-gray-400 text-xs truncate w-full">
          {artist}
        </p>
      </div>
    );
  };
  