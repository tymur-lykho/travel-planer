import { changeCategoryFilters } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./CategoryList.module.css";
import clsx from "clsx";

export default function CategoryList({ categories }) {
  const dispatch = useDispatch();
  const onUpdate = (event) => {
    dispatch(changeCategoryFilters(event.target.name));
  };
  const selectedCategory = useSelector((state) => state.filters.category);

  return (
    <ul className={css.categories}>
      {categories.map((category, idx) => {
        const categoryValue =
          category.toLowerCase() === "all" ? "" : category.toLowerCase();

        const buttonClass = clsx(css.itemBtn, {
          [css.active]: selectedCategory === categoryValue,
        });

        return (
          <li key={idx}>
            <button
              className={buttonClass}
              onClick={onUpdate}
              name={categoryValue}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
