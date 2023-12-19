import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../components/ui/form.tsx';
import {Input} from '../components/ui/input.tsx';
import {Button} from '../components/ui/button.tsx';
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {useNavigate} from "react-router-dom";
import {cn} from "../lib/utils.ts";
import boy from "../images/boy1.png";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../components/ui/dialog"
  
import {Textarea} from "../components/ui/textarea.tsx"
import { MessageCircleMore, PlusCircle } from 'lucide-react';
import {useState} from "react";
import NotesComponent from '../components/NotesComponent.js';

import {Alert, AlertDescription, AlertTitle} from "../components/ui/alert.tsx";
import {AlertCircle} from "lucide-react";

const formSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required')
});


const StudentSignUp = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const data = JSON.parse(localStorage.getItem("notes"));
    const [dialog, setDialog] = useState(false);
    const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    });
    const isLoading = form.formState.isSubmitting;
    const navigate = useNavigate();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const newData = {
                title: values.title,
                studentId: currentUser.id,
                content: values.content,
            }
           
            data.push(newData)
            localStorage.setItem("notes", JSON.stringify(data));
            form.reset();
            setDialog(false);

        } catch (error) {
            console.error(error)
        }
    };

    const handleOpenChange = () => {
        if (!form.formState.isDirty){
            setDialog(false);
        }else{
            setAlertMessage("Changes Not Saved!!!")
        }
    }


    return (
        <div className={"m-3 flex flex-col justify-between "}>
            <Alert
                className={cn("absolute bg-white md:w-[30%] w-[40%] top-5 right-2", alertMessage.length > 0 ? "" : "hidden")}
                variant={"destructive"}>
                <AlertCircle className={"h-4 w-4 "}/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {alertMessage}
                </AlertDescription>
            </Alert>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col align-middle justify-evenly"}>
                    <span className={"text-3xl font-semibold"}>Notes</span>
                </div>
                <div className="h-inherit flex-row flex justify-evenly items-center">
                    <MessageCircleMore className="h-[50px] w-[50px] mr-10"/>
                    <img src={boy} className="h-[100px] w-[100px]" alt={"avatar"}/>
                </div>
            </div>
            <div>
                <Button variant={"secondary"} onClick={()=>setDialog(true)}>
                <div className='w-full flex flex-row justify-between items-center'>
                    <PlusCircle className='h-4 w-4 mr-2'/> Add A Note </div>
                </Button>
            </div>
            <div className='m-3 mt-5'>
                Your Notes
                <div className='flex flex-wrap justify-start'>
                {data.map((obj) => {
                    return obj.studentId === currentUser.id && (
                        <NotesComponent key={obj.id} title={obj.title} content={obj.content} />
                    );
                    })}
                </div>
            </div>
            <Dialog open={dialog} onOpenChange={handleOpenChange}>
               
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add A Note</DialogTitle>
                        {/*<CardDescription>Fill in the details to create your account.</CardDescription>*/}
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="w-full items-center flex flex-col">
                                <FormField
                                    disabled={isLoading}
                                    name={"title"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isLoading}
                                                    placeholder="Enter Title"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                                <FormField
                                    disabled={isLoading}
                                    name={"content"}
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Content</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Enter Content" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                    }/>
                                
                            </div>


                            <div className="flex flex-col">
                                <Button className={"bg-indigo-950 text-white rounded-[10px] p-3 hover:bg-indigo-900"}
                                        type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>

                </DialogContent>

            </Dialog>
            
        </div>
    );

}
export default StudentSignUp;