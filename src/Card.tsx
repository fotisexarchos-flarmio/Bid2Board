interface CardProps {
  children?: any;
  className?: string;
  border?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  hasShadow?: boolean;
  statusColor?: string;
  statusSize?: 'sm' | 'md' | 'lg';
  tooltip?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  border = false,
  isDisabled = false,
  onClick,
  hasShadow = true,
  statusColor,
  statusSize = 'md',
  tooltip,
}) => {

  const dotSizes = { sm: 'w-2 h-2', md: 'w-3 h-3', lg: 'w-4 h-4' };

  return (
    <div
      title={tooltip}
      onClick={isDisabled ? undefined : onClick}
      className={`
        bg-white rounded-xl p-5 relative
        transition-all duration-200 ease-out
        ${hasShadow ? 'shadow-md' : ''}
        ${border ? 'border border-gray-200' : ''}
        ${
          isDisabled 
            ? 'opacity-50 cursor-not-allowed' 
            : onClick 
              ? 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5 hover:bg-slate-50/40 active:translate-y-0 active:scale-[0.99] active:shadow-md' 
              : ''
        }
        ${className}
      `}
    >
      {statusColor && (
        <span
          className={`absolute top-3 right-3 rounded-full ${dotSizes[statusSize]}`}
          style={{ backgroundColor: statusColor }}
        />
      )}
      {children}
    </div>
  );
};

export default Card;