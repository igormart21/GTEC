'use client';

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'dots' | 'line';
  className?: string;
}

export default function SectionDivider({ 
  variant = 'default', 
  className = '' 
}: SectionDividerProps) {
  const variants = {
    default: (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <div className="flex items-center space-x-3 w-full max-w-md">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    ),
    gradient: (
      <div className={`py-8 ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    ),
    dots: (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    ),
    line: (
      <div className={`py-6 ${className}`}>
        <div className="h-px bg-gray-200"></div>
      </div>
    )
  };

  return variants[variant];
}
