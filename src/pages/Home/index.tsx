import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButtonContainer, StopCountdownButtonContainer } from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { CycleContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a Tarefa'),
    minutesAmount: zod.number()
        .min(5, 'O Ciclo precisa ser maior que 5')
        .max(120, 'O Ciclo precisa ser menor que 120')
})

// interface NewCycleFormData {
//     task: string,
//     minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CycleContext)

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)

        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <>
            <HomeContainer>
                <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm></NewCycleForm>
                    </FormProvider>

                    <Countdown
                    ></Countdown>

                    {activeCycle ? (
                        <StopCountdownButtonContainer type="button" onClick={ interruptCurrentCycle }>
                            <HandPalm size={24}></HandPalm> Interromper
                        </StopCountdownButtonContainer>
                    ) : (
                        <StartCountdownButtonContainer disabled={isSubmitDisabled} type="submit">
                            <Play size={24}></Play> Começar
                        </StartCountdownButtonContainer>
                    )}
                </form>
            </HomeContainer>
        </>
    )
}