import { Memento } from './memento';

export function saveState( ): MethodDecorator{
    return function(target: Function, key, descriptor: any){

        const origMeth = descriptor.value;

        descriptor.value = function (...args: any[]){

            this.careTk.history.push(new Memento(this.employee.wage));
            const newMeth = origMeth.apply(this, args);
            
            this.careTk.redo_history.push(new Memento(this.employee.wage));
            
            return newMeth;
        };

        return descriptor;
    };
}


