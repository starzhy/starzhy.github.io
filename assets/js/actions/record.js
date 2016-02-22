export const START_RECORD  = 'START_RECORD';
export const END_RECORD    = 'END_RECORD';


export function startRecord(){
    return {
        type:START_RECORD
    }
}

export function endRecord(){
    return {
        type: END_RECORD
    }
}