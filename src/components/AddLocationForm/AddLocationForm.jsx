import { Formik, Form, Field } from "formik";
import css from "./AddLocationForm.module.css";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addMarker } from "../../redux/markersSlice";
import { MdClose } from "react-icons/md";

export default function AddLocationForm({ formData, onClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newPlaceData = { ...values, id: uuidv4() };
    dispatch(addMarker(newPlaceData));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: formData.name || "",
          lat: formData.lat || 0,
          lng: formData.lng || 0,
          category: "",
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <button className={css.closeBtn} onClick={onClose}>
              <MdClose />
            </button>
            <h3 className={css.title}>About this place</h3>

            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Location name"
              required
            />
            <Field as="select" name="category" className={css.field}>
              <option value="" disabled>
                ---Select category---
              </option>
              <option value="sight">Sights</option>
              <option value="hotel">Hotel</option>
              <option value="cafe">Cafe & Restourant</option>
            </Field>
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
