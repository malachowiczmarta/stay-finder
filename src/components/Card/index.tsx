type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="p-4">
      <div className="bg-violet-50 p-6 rounded-lg">{children}</div>
    </div>
  );
};

export default Card;
