import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./FeedbackForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required(),
  email: Yup.string().email("Invalid email format").required(),
  bookingDate: Yup.date().required(),
  comment: Yup.string().max(300, "Comment is too long"),
});

const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export default function FeedbackForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.wrap}>
        <div className={css.titleWrap}>
          <h2 className={css.title}>Book your campervan now</h2>
          <p className={css.titleText}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div className={css.inputWrap}>
          <div className={css.inputField}>
            <Field
              className={css.input}
              type="text"
              placeholder="Name*"
              name="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputField}>
            <Field
              className={css.input}
              type="email"
              placeholder="Email*"
              name="email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.inputField}>
            <Field
              className={css.input}
              type="date"
              placeholder="Booking date*"
              name="bookingDate"
            />
            <ErrorMessage
              className={css.error}
              name="bookingDate"
              component="span"
            />
          </div>
          <div className={css.inputField}>
            <Field
              className={css.input}
              as="textarea"
              name="comment"
              rows="4"
              placeholder="Comment"
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Send
        </button>
      </Form>
    </Formik>
  );
}
