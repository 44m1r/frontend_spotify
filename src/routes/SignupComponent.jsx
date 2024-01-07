import { Icon } from '@iconify/react';
import TextInput from '../components/Shared/TextInput';
import PasswordInput from '../components/Shared/PasswordInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';
import { useCookies } from 'react-cookie'; //  helps to set new cookies
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {

    const [email,setEmail] = useState();
    const [confirmEmail,setConfirmEmail] = useState();
    const [username,setUserName] = useState();
    const [password,setPwd] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [cookie,setCookie] = useCookies(["token"])
    const navigate = useNavigate();

    const signUp = async () => {
        if(email !== confirmEmail) {
            alert("Email and Confirm Email feild must match. Please check again");
            return;
        }
        
        const data = {email,password,firstName,lastName,username};
        
        const response = await makeUnauthenticatedPOSTRequest("/auth/register",data);
        
        if(response && !response.error){
            // console.log(response);
            const token = response?.token;
            const date = new Date();
            // set date upto 30 days from current date
            date.setDate(date.getDate() + 30);
            // path stores in default cookie location of website
            // expires basically sets the date for cookie to be alive on browser after that it gets deleted
            setCookie("token",token,{path:"/",expires:date});
            navigate("/home");
        }
        else{
            console.log(response.error);
        }

    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b-2 border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>

            <div className="inputForm w-1/3 py-10 flex flex-col items-center justify-center">
                <div className='font-bold mb-7 text-2xl'>Sign up for free to start listening.</div>

                <TextInput
                    label={"Email Address"}
                    placeholder={"Enter you email address"}
                    styleInput={"mb-7"}
                    value={email}
                    setValue={setEmail}
                />

                <TextInput
                    label={"Confirm Email Address"}
                    placeholder={"Confirm your email address"}
                    styleInput={"mb-7"}
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                />
                
                <TextInput
                    label={"Username"}
                    placeholder={"Enter Username"}
                    styleInput={"mb-7"}
                    value={username}
                    setValue={setUserName}
                />

                <PasswordInput
                    label={"Create Password"}
                    placeholder={"Enter your Password"}
                    styleInput={"mb-7"}
                    value={password}
                    setValue={setPwd}
                />

                <div className='w-full flex justify-between items-center space-x-5'>
                <TextInput
                    label={"First Name"}
                    placeholder={"Enter first name"}
                    value={firstName}
                    setValue={setFirstName}
                />
                <TextInput
                    label={"Last Name"}
                    placeholder={"Enter last name"}
                    value={lastName}
                    setValue={setLastName}
                />
                </div>

                <div className='w-full flex justify-center my-8'>


                    <button className='bg-green-400 font-bold py-2 px-5 rounded-full'
                        onClick={(e) =>{
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        Sign Up
                    </button>

                </div>

                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-5 font-semibold text-lg'>
                    Already have an account?
                </div>

                <div className='w-full border border-gray-400 text-gray-600 flex items-center justify-center py-4 rounded-full font-bold'>
                    <Link to="/login">
                        LOG IN INSTEAD
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default SignupComponent;