import { FunctionCombinator } from "./functionCombinator";

describe('A function combinator', () => {


    it('adds functions to a list', () => {
        const functionCombinator = new FunctionCombinator<void>()
        functionCombinator.addFunction(() => void 0)
        expect(functionCombinator.functionListSize()).toEqual(1)
    })

    it('executes that series of functions on a value', () => {
        const functionCombinator = new FunctionCombinator<number>()
        const someAddingFunction = (val: number) => val + 1
        functionCombinator.addFunction(someAddingFunction)
        functionCombinator.addFunction(someAddingFunction)
        expect(functionCombinator.executeFunctions(5)).toEqual(7)
    })

    it.each([[5], ["SomeData"], null])('executes on data', (arg) => {
        const 
    })
});
