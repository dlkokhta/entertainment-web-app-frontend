import search from "../assets/icon-search.svg";
import { useDispatch } from "react-redux";
import { setInputValue } from "../store/inputValueSlice";
import { RootState } from "../store/store.js";
import { useSelector } from "react-redux";

interface SearchComponentProps {
  placeholder: string;
}

const SearchComponent = (props: SearchComponentProps) => {
  const dispatch = useDispatch();

  const inputValue = useSelector(
    (store: RootState) => store.inputValue.inputValue
  );

  const inputChangeHandler = (e: any) => {
    dispatch(setInputValue(e.target.value));
  };
  return (
    <div className="flex items-center pl-[19px] pr-[102px] gap-4 mb-[27px] lg:pl-0">
      <img className="w-[18px] h-[18px] lg:w-6 lg:h-6 " src={search} />
      <input
        className="text-white font-outfit text-base w-full outline-none bg-transparent lg:text-2xl"
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
        value={inputValue}
      />
    </div>
  );
};

export default SearchComponent;
