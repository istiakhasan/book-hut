/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const YearDropdown = ({ startYear, endYear, onChange }) => {
  const years = [];
  for (let year = startYear; year > endYear; year--) {
    years.push(year);
  }

  return (
    <select className="select select-bordered w-full max-w-xs" onChange={onChange}>
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;
