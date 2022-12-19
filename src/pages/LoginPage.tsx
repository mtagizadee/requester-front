import Input from "../components/ui/Input";
import { useRef, MouseEvent, useState } from 'react';
import { z, ZodIssueCode, ZodIssue } from 'zod';
import { emailSchema, passwordSchema } from "../validators";
import Button from "../components/ui/Button";
import InputError from "../components/ui/InputError";
import { isPasswordsError } from "../helpers";
import { FiMail, FiLock } from 'react-icons/fi';
import PageLink from "../components/PageLink";
import routes from "../constants/routes";

const LoginUserSchema = z.object({
    email: emailSchema,
    password: passwordSchema
})

type LoginUserDto = z.infer<typeof LoginUserSchema>;

const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<ZodIssue>();

    const onSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!emailRef.current || !passwordRef.current) return;

        const email: string = emailRef.current.value;
        const password: string = passwordRef.current.value;

        const dto: LoginUserDto = {
            email,
            password
        }

        const validate = LoginUserSchema.safeParse(dto);
        if (!validate.success) {
            setError(validate.error.issues[0]);
            return;
        }

        // TODO: send dto to server
        setError(undefined);
        console.log(dto);
    }

    return (
        <form onSubmit={onSubmit} className="auth-form">
            <Input
                icon={() => <FiMail />}
                placeholder="Email"
                innerRef={emailRef}
            />
            {error?.code === ZodIssueCode.invalid_string ? <InputError> {error.message} </InputError> : null}

            <Input
                className="mt-3"
                icon={() => <FiLock />}
                placeholder="Password"
                hidden
                innerRef={passwordRef}
            />
            {isPasswordsError(error) ? <InputError> {error?.message} </InputError> : null}

            <Button type="submit" className="my-3"> Log in </Button>
            <p> Do not have an account? <PageLink to={routes.registerRoute()}> Register! </PageLink> </p>
        </form>
    );
}

export default LoginPage;