import Card from './Card';

interface ShipProps {
  className?: string;
  image: string;
  shipType: string;
  name: string;
  onClick?: () => void;
}

export const Ship: React.FC<ShipProps> = ({
  className = '',
  image,
  shipType,
  name,
  onClick,
}) => {
  return (
    <Card onClick={onClick} className={`p-4 w-full max-w-xl mx-auto ${className}`}>
      <div className="flex items-center justify-between gap-6">
        
        <img
          src={image}
          alt={name}
          className="w-36 h-24 object-cover rounded-lg flex-shrink-0"
        />

        <div className="flex flex-1 items-start gap-3">
          <svg className="w-7 h-7 text-gray-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 16l-1.5-5h.5c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-3V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3H8c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h.5L6 16H3.5c-.8 0-1.5.7-1.5 1.5S2.7 19 3.5 19h17c.8 0 1.5-.7 1.5-1.5S21.3 16 19 16z" />
          </svg>
          
          <div className="text-left">
            <div className="text-xl font-bold text-slate-700 tracking-wide">
              {name}
            </div>
            <p className="text-slate-400 font-medium text-base mt-1">
              {shipType}
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

export default Ship;