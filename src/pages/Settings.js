import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../components/ui/form.tsx';
import {Input} from '../components/ui/input.tsx';
import {Button} from '../components/ui/button.tsx';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '../components/ui/select.tsx';
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {useNavigate} from "react-router-dom";
import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert.tsx";
import {cn} from "../lib/utils.ts";
import {AlertCircle} from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog"

import {useState} from "react";


const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    password: z.string().min(8, 'Password is required'),
    age: z.string().min(1, "Age is Required"),
    gender: z.string().min(1, "Gender Is required"),
    standard: z.string().min(1, "Grade is Required"),
    phone: z.string().min(10, "Number must be 10 digits")
});


const StudentSignUp = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertDialog, setAlertDialog] = useState(false);
    const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: currentUser.name,
            password: "",
            age: currentUser.age,
            gender: currentUser.gender,
            standard: currentUser.standard,
            phone: currentUser.phone
        }
    });
    const isLoading = form.formState.isSubmitting;
    const navigate = useNavigate();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const data = JSON.parse(localStorage.getItem("studentData"));
            const newData = {
                name: values.name,
                id: currentUser.id,
                password: values.password,
                age: values.age,
                gender: values.gender,
                standard: values.standard,
                phone: values.phone
            }
            setAlertMessage("Updated");
            setAlertDialog(true);
            const index = data.findIndex(obj => obj.id === currentUser.id);
            data[index] = newData;
            localStorage.setItem("studentData", JSON.stringify(data));
            sessionStorage.setItem("current-user", JSON.stringify(newData))
            // navigate("/dashboard");


        } catch (error) {
            setAlertMessage(error);
            console.error(error)
        }
    };


    return (
        <div className={"h-screen flex flex-col justify-evenly items-center align-middle"}>
            <Alert
                className={cn("absolute bg-white md:w-[30%] w-[40%] top-5 right-2", alertMessage.length > 0 ? "" : "hidden")}
                variant={"destructive"}>
                <AlertCircle className={"h-4 w-4 "}/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {alertMessage}
                </AlertDescription>
            </Alert>
            <AlertDialog open={alertDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Successfully Updated</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => navigate("/dashboard")}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


            <Card className="w-fit shadow-2xl bg-white rounded-2xl">
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    {/*<CardDescription>Fill in the details to create your account.</CardDescription>*/}
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid w-full items-center gap-10 md:grid-cols-3 grid-cols-2">
                                <FormField
                                    disabled={isLoading}
                                    name={"name"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder="Enter your Name"
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
                                <FormField
                                    disabled={isLoading}
                                    name={"age"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Age:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder="Enter your Age"
                                                    type={"number"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                                <FormField
                                    disabled={isLoading}
                                    name={"gender"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Gender:</FormLabel>
                                            <Select
                                                disabled={isLoading}
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a Gender"/>
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>

                                <FormField
                                    disabled={isLoading}
                                    name={"standard"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Standard</FormLabel>
                                            <Select
                                                disabled={isLoading}
                                                defaultValue={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your Standard"/>
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="six">VI</SelectItem>
                                                        <SelectItem value="seven">VII</SelectItem>
                                                        <SelectItem value="eight">VIII</SelectItem>
                                                        <SelectItem value="nine">IX</SelectItem>
                                                        <SelectItem value="ten">X</SelectItem>
                                                        <SelectItem value="eleven">XI</SelectItem>
                                                        <SelectItem value="twele">XII</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                                <FormField
                                    disabled={isLoading}
                                    name={"phone"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Phone Number:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder="Enter your Phone Number"
                                                    type={"number"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                            </div>


                            <div className="flex flex-col">
                                <Button className={"bg-indigo-950 text-white rounded-[10px] p-3 hover:bg-indigo-900"}
                                        type="submit">Sign Up</Button>
                            </div>
                        </form>
                    </Form>

                </CardContent>

            </Card>
        </div>
    );

}
export default StudentSignUp;