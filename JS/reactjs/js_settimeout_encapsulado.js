export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Usage
import { wait } from 'helpers/wait'

wait(500).finally(() => {
    // code
});