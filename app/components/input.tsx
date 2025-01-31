interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      placeholder="Search by destination"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-schiphol-blue-300 focus:border-schiphol-blue-300 transition"
      {...props}
    />
  );
};
