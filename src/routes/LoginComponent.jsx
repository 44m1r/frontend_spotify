import { Icon } from '@iconify/react';
import TextInput from '../components/Shared/TextInput';
import PasswordInput from '../components/Shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cookie, setCookie] = useCookies(["token"])
    const navigate = useNavigate();

    const login = async () => {

        const credentials = {
            email: email,
            password: password
        }

        const response = await makeUnauthenticatedPOSTRequest("/auth/login", credentials);
        if (response && !response.error) {
            const token = response?.token;
            const date = new Date();
            // setting expiry of token
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });
            navigate("/home");
        }
        else {
            console.log("Can not login!");
        }
    }


    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b-2 border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>

            <div className="inputForm w-1/3 py-10 flex flex-col items-center justify-center">
                <div className='font-bold mb-7'>To continue, log in to Spotify.</div>

                <TextInput
                    label={"Email"}
                    placeholder={"Enter your email"}
                    styleInput={"mb-7"}
                    value={email}
                    setValue={setEmail}
                />

                <PasswordInput
                    label={"Password"}
                    placeholder={"Enter your Password"}
                    value={password}
                    setValue={setPassword}
                />

                <div className='w-full flex justify-end my-8'>


                    <button
                        className='bg-green-400 font-bold py-2 px-5 rounded-full'
                        onClick={() => login()}
                    >
                        LOG IN
                    </button>

                </div>

                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-5 font-semibold text-lg'>
                    Don't have an account?
                </div>

                <div className='w-full border border-gray-400 text-gray-600 flex items-center justify-center py-4 rounded-full font-bold'>
                    <Link to="/signup">
                        SIGN UP FOR SPOTIFY
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default LoginComponent;