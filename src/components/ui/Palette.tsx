interface Props {
   colors: string[];
}

const Palette: React.FC<Props> = ({ colors }) => {
   return (
      <div
         className="grid rounded-xl overflow-hidden"
         style={{
            gridTemplateColumns: `repeat(${colors.length}, minmax(0, 1fr))`,
         }}
      >
         {colors.map((color) => (
            <div
               className="w-full h-24"
               style={{
                  backgroundColor: color,
               }}
            />
         ))}
      </div>
   );
};

export default Palette;
