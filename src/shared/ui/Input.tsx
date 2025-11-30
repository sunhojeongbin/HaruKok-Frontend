interface IInputProps {
    type: string;
    id?: string;
    placeholder?: string;
}

export const Input = ({ type, id, placeholder }: IInputProps) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className='w-80 h-12 p-3 rounded-lg border border-[#e8e8e8] text-[#313131] focus:outline-none focus:border-transparent focus:shadow-[0_0_0_2px_#aad1f0]'
        />
    );
};
