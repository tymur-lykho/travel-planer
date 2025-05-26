import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Formik, Form, Field } from "formik";
import css from "./AddLocationForm.module.css";

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
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          onLocationFormSubmit({ values });
          resetForm();
        }}
      >
        {() => (
          <Form className={css.form}>
            <h3 className={css.title}>About this place</h3>

            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Location name"
              required
            />
            <p className={css.latLng}>
              Latitude: <span>{formData.lat}</span>
            </p>
            <p className={css.latLng}>
              Longitude: <span>{formData.lng}</span>
            </p>

            <button className={css.saveBtn} type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
