import Card from './Card';

interface PendingRatingProps {
  className?: string;
  image: string;
  supplierName: string;
  onClick?: () => void;
  shipName: string;
}

export const PendingRating: React.FC<PendingRatingProps> = ({
  className = '',
  image,
  supplierName,
  onClick,
  shipName,
}) => {
  return (
    <Card onClick={onClick} className={`p-4 w-full max-w-xl mx-auto ${className}`}>
      <div className="flex items-center justify-between gap-6">
        
        <img
          src={image}
          alt={supplierName}
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
        />

        <div className="flex flex-1 flex-col gap-2 justify-center text-left">
          
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
            <div className="text-xl font-bold text-slate-700 leading-tight tracking-wide">
              {supplierName}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 16l-1.5-5h.5c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-3V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3H8c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h.5L6 16H3.5c-.8 0-1.5.7-1.5 1.5S2.7 19 3.5 19h17c.8 0 1.5-.7 1.5-1.5S21.3 16 19 16z" />
            </svg>
            <p className="text-slate-500 font-semibold text-base">
              {shipName}
            </p>
          </div>
          
        </div>

        <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mr-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

      </div>
    </Card>
  );
};

export default PendingRating;