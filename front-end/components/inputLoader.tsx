import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

type Props = {
    vraag: string;
    antwoord: string;
    next_q: string;
    given_hint?: string; // optional

}

const InputLoader: React.FC<Props> = ({vraag, antwoord, next_q, given_hint}:Props) =>{
    const router = useRouter();
    const [ans1Er, setAns1Er] = useState<string>("");
    const [hint, setHint] = useState<boolean>(false)
    let wrong = 0

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setAns1Er("")
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            ans1: formData.get("answer1") as string
        }
        if (data.ans1.toLowerCase() === antwoord){
            setAns1Er("Goed!")
            wrong = 0
            setTimeout(()=>router.push(next_q), 1500);
        } else{
            setAns1Er("Probeer opnieuw!")
            wrong +=1
            if (wrong>4){
                setHint(true)
            }
            console.log(wrong)
        }


        
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 h-[50vh]">
            <div className="w-full max-w-md space-y-8 rounded-lg border-1 bg-card p-10 shadow-xl">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                    {vraag}
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                    <input type="hidden" autoComplete="off" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <Input type="text" placeholder="Antwoord" name="answer1"  />
                        {ans1Er && <p className="text-white text-center">{ans1Er}</p>}
                    </div>
                    <div className="flex justify-center flex-col space-y-2">
                        <Button variant="default" size="default" type="submit" className="w-full bg-input">
                            <p>Indienen</p>
                        </Button>
                        {(given_hint && hint) && <p className="text-xl text-center">HINT: {given_hint}</p>}
                    </div>
                </form>
            </div>
        </div>
        </>
    )
} 

export default InputLoader;