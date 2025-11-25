interface ILabelProps {
    children: React.ReactNode;
    htmlFor?: string;
}

export const Label = ({ children, htmlFor }: ILabelProps) => {
    return (
        <label htmlFor={htmlFor} className='block mb-2 text-[#313131] text-left'>
            {children}
        </label>
    );
};
