import Input from "../components/ui/Input";
import InputError from "../components/ui/InputError";
import { useRef, useState, MouseEvent } from "react";
import Button from "../components/ui/Button";
import { FiMail, FiLock, FiGithub } from "react-icons/fi";
import { z, ZodIssueCode, ZodIssue } from "zod";
import { emailSchema, passwordSchema } from "../validators";
import { isPasswordsError } from "../helpers";
import PageLink from "../components/PageLink";
import routes from "../constants/routes";

const RegistrationUserSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  passwordConfirm: passwordSchema,
  fullName: z.string(),
});

type RegistrationUserDto = z.infer<typeof RegistrationUserSchema>;

const RegistrationPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ZodIssue>();
  const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false);

  const resetErrors = () => {
    setError(undefined);
    setPasswordMismatch(false);
  };

  const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current || !passwordConfirmRef.current || !fullNameRef.current) return;

    const email: string = emailRef.current.value;
    const password: string = passwordRef.current.value;
    const passwordConfirm: string = passwordConfirmRef.current.value;
    const fullName: string = fullNameRef.current.value;

    if (password !== passwordConfirm) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);

    const dto: RegistrationUserDto = { email, password, passwordConfirm, fullName };

    const validate = RegistrationUserSchema.safeParse(dto);
    if (!validate.success) {
      setError(validate.error.issues[0]);
      return;
    }

    // TODO: send dto to server
    resetErrors();
    console.log(dto);
  };

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <Input icon={() => <FiMail />} placeholder="Email" innerRef={emailRef} />
      {error?.code === ZodIssueCode.invalid_string ? <InputError> {error?.message} </InputError> : null}

      <Input className="my-3" icon={() => <FiGithub />} placeholder="Full name" innerRef={fullNameRef} />

      <Input icon={() => <FiLock />} placeholder="Password" innerRef={passwordRef} hidden />
      {isPasswordsError(error) ? <InputError> {error?.message} </InputError> : null}

      <Input
        className="mt-3"
        icon={() => <FiLock />}
        placeholder="Confirm password"
        innerRef={passwordConfirmRef}
        hidden
      />
      {isPasswordsError(error) ? <InputError> {error?.message} </InputError> : null}
      {passwordMismatch ? <InputError> Passwords do not match </InputError> : null}

      <Button className="my-3" type="submit">
        Register
      </Button>
      <p>
        Already have an account? <PageLink to={routes.loginRout()}> Login! </PageLink>{" "}
      </p>
    </form>
  );
};

export default RegistrationPage;
