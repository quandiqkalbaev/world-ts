import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  value: string;
  setValue: (val: string) => void;
}
function Search({ value, setValue }: SearchProps) {
  return (
    <div className="main__search">
      <label className="main__search-icon" htmlFor="main-search">
        <SearchIcon />
      </label>
      <input
        type="text"
        id="main-search"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
