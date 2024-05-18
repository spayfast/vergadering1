import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

type Props = {
    vraag: string;
    antwoord: string;
    next_q: string;
    given_hint?: string; // optional
    ans_type?: string; // optional
    second_q?: string; // optional
    second_ans?: string; // optional
}

const InputLoader: React.FC<Props> = ({vraag, antwoord, next_q, given_hint, ans_type, second_ans, second_q}:Props) =>{
    const router = useRouter();
    const [ans1Er, setAns1Er] = useState<string>("");
    const [ans2Er, setAns2Er] = useState<string>("");
    const [hint, setHint] = useState<boolean>(false)
    let wrong = 0

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setAns1Er("");
        setAns2Er("");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (!second_ans){
        const data = {
            ans1: formData.get("answer1") as string
        }
        if (data.ans1.toLowerCase() === antwoord){
            setAns1Er("Goed!")
            wrong = 0
            setTimeout(()=>router.push(next_q), 1500);
        } else{
            console.log(data.ans1.toLowerCase())
            setAns1Er("Probeer opnieuw!")
            wrong +=1
            if (wrong>4){
                setHint(true)
            }
        }} else{
            const data = {
                ans1: formData.get("answer1") as string,
                ans2: formData.get("answer2") as string
            }
            if (data.ans1.toLowerCase() === antwoord){
                if (data.ans2.toLowerCase() === second_ans){
                    setAns1Er("Goed!")
                    wrong = 0
                    setTimeout(()=>router.push(next_q), 1500);
                } else{
                    setAns2Er("Probeer opnieuw!")
                    wrong +=1
                    if (wrong>4){
                        setHint(true)
                    }
                }
            } else {
                setAns1Er("Probeer opnieuw!")
                wrong +=1
                if (wrong>4){
                    setHint(true)
                }
            }
        }
        
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 h-[70vh]">
            <div className="w-full max-w-md space-y-8 rounded-lg border-1 bg-card p-10 shadow-xl">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                    {vraag}
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                    <input type="hidden" autoComplete="off" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <Input type={ans_type||"text"} placeholder="Antwoord" name="answer1"  />
                        {ans1Er && <p className="text-white text-center">{ans1Er}</p>}
                    </div>
                    {(second_q && second_ans)&&(
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div className="text-xl text-white">{second_q}</div>
                        <Input type={ans_type||"text"} name="answer2"  />
                        {ans2Er && <p className="text-white text-center">{ans2Er}</p>}
                    </div>)}
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