import { FormContainer, MinutesAmountInputContainer, TaskInputContainer } from "./styles";
import { useFormContext } from 'react-hook-form'
import { useContext } from "react";
import { CycleContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
    const { activeCycle } = useContext(CycleContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInputContainer
                id="task"
                placeholder="Dê um nome para o seu projeto"
                list="taskSuggestion"
                {...register('task')}
                disabled={!!activeCycle}
            ></TaskInputContainer>

            <datalist id="taskSuggestion">
                <option value="Projeto 1"></option>
                <option value="Projeto 2"></option>
                <option value="Projeto 3"></option>
                <option value="Banana"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInputContainer
                id="minutesAmount"
                type="number"
                placeholder="00"
                step={5}
                min={5}
                max={120}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            ></MinutesAmountInputContainer>

            <span>minutos.</span>
        </FormContainer>
    )
}