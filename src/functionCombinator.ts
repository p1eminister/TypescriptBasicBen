type CombineFunction<K> = (arg: K) => K

export class FunctionCombinator<T> {

    constructor(private functionList: CombineFunction<T>[] = []){}

    addFunction = (fn: CombineFunction<T>) => {
        this.functionList.push(fn)
    }

    executeFunctions = (initialValue: T) => 
        this.functionList.reduce((prev, fn) => {
            return fn(prev)
        }, initialValue)

    functionListSize = () => this.functionList.length
}
