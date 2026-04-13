interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

const COLORS = [
  '#f3abb6',
  '#f9c449',
  '#cbe54e',
  '#1ea958',
  '#aad1f0',
  '#758eb7',
  '#ccabdb',
  '#1a1a1a',
];

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  return (
    <div className='grid grid-cols-6 justify-items-center gap-3'>
      {COLORS.map((color) => {
        const isSelected = value.toLowerCase() === color.toLowerCase();

        return (
          <button
            key={color}
            type='button'
            onClick={() => onChange(color.toLowerCase())}
            className='flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-100 active:scale-95'
          >
            <div
              className={`h-9 w-9 rounded-full transition-shadow duration-100 ${isSelected ? 'ring-2 ring-offset-2' : 'ring-0'}`}
              style={{ backgroundColor: color }}
            />
          </button>
        );
      })}
    </div>
  );
};
