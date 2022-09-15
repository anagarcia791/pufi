import { useForm, ValidationError } from "@formspree/react";
import { FaArrowRight } from "react-icons/fa";

export const Subscribe = () => {
  const [state, handleSubmit] = useForm("xnqrjbnv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className="subscribe-form">
      <fieldset>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ingresa tu email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          <FaArrowRight />
        </button>
      </fieldset>
    </form>
  );
};
