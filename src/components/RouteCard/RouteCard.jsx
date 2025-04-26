import MenuCard from "../MenuCard/MenuCard";

export default function RouteCard({ route, deleteRoute }) {
  return (
    <>
      <MenuCard title={route.name}>
        <button
          type="button"
          onClick={() => {
            deleteRoute(route.id);
          }}
        >
          Delete
        </button>
        <button type="button">Update</button>
      </MenuCard>
    </>
  );
}
