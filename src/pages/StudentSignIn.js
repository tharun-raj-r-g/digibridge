import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../components/ui/form.tsx';
import {Input} from '../components/ui/input.tsx';
import {Button} from '../components/ui/button.tsx';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert.tsx"
import {AlertCircle} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "../lib/utils.ts";
import logo from "../images/logo-full.png";


const formSchema = z.object({
    enrolment: z.string().min(6, 'Enrolment Number is minimum of 6 characters'),
    password: z.string().min(8, 'Password must be minimum of 8 characters')
});


const StudentSignUp = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            enrolment: "",
            password: ""
        }
    });
    const isLoading = form.formState.isSubmitting;
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState("");

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const data = JSON.parse(localStorage.getItem("studentData"));
            const user = data.find(obj => obj.id.slice(-6) === values.enrolment);
            if (user!=null) {
                if (user.password === values.password) {
                    sessionStorage.setItem("current-user", JSON.stringify(user));
                    navigate("/dashboard");

                } else {
                    setAlertMessage("Password Doesn't Match");
                }
            }else{
                setAlertMessage("User Not Found");
            }

        } catch (error) {
            console.error(error)
        }
    };
    const wait = async (milliseconds: number): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        });
    };
    useEffect(() => {

        const fetchData = async () => {
            // Your asynchronous code here

            // Simulate a delay of 1000 milliseconds (1 second)
            await wait(5000);

            setAlertMessage("");
            // More asynchronous code after the delay
        };

        fetchData();

    }, [alertMessage]);


    return (
        <div className={"h-screen flex flex-col justify-evenly items-center align-middle"}>
            <Alert
                className={cn("absolute bg-white md:w-[30%] w-[40%] top-5 right-2", alertMessage.length > 0 ? "" : "hidden")}
                variant={"destructive"}>
                <AlertCircle className={"h-4 w-4 "}/>
                <AlertTitle>

                    Error</AlertTitle>
                <AlertDescription>
                    {alertMessage}
                </AlertDescription>
            </Alert>


            <img src={logo} alt={"Logo"} className={"h-40"}/>
            <Card className="lg:w-1/3 md:w-2/3 w-full shadow-2xl bg-white rounded-2xl">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Fill in the details to start your account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid w-full items-center gap-10 ">
                                <FormField
                                    disabled={isLoading}
                                    name={"enrolment"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Enrolment</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder="Enter Enrolment"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                                <FormField
                                    disabled={isLoading}
                                    name={"password"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type={"password"} placeholder="Enter Password" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                            </div>


                            <div className="flex flex-col space-y-1.5 pt-2">
                                <Button type="submit">Sign In</Button>
                            </div>
                        </form>
                    </Form>
                    <span className={"text-gray-500 text-sm pt-2"}>New Here? <Link to={"/signup"}
                                                                                   className={"text-blue-600 hover:underline"}>Sign Up</Link></span>
                </CardContent>

            </Card>

        </div>
    );

}
export default StudentSignUp;