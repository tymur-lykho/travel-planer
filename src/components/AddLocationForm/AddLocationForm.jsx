import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Formik, Form, Field } from "formik";

export default function AddLocationForm({
  formData,
  onUpdate,
  onLocationFormSubmit,
}) {
  return (
    <>
      <Formik
        initialValues={{
          name: formData.name || "",
          lat: formData.lat || 0,
          lng: formData.lng || 0,
        }}
        enableReinitialize // важливо, щоб оновлювались значення при зміні formData
        onSubmit={(values, { resetForm }) => {
          onLocationFormSubmit({ values }); // можна передавати також lat/lng окремо
          resetForm();
        }}
      >
        {() => (
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <h3>Save location</h3>

            <Field
              type="text"
              name="name"
              placeholder="Location name"
              required
            />

            <h4>Coordinates to this point:</h4>
            <p>Latitude: {formData.lat}</p>
            <p>Longitude: {formData.lng}</p>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
