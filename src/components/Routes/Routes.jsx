import RouteCard from "../RouteCard/RouteCard";

export default function Routes({
  savedRoutes: routeList,
  addRoute,
  deleteRoute,
}) {
  return (
    <>
      <button type="button" onClick={addRoute}>
        Add new route
      </button>

      <ul>
        {routeList.map((route) => {
          return (
            <li key={route.id}>
              <RouteCard route={route} deleteRoute={deleteRoute} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
