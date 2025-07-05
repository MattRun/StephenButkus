/* Core */
import { createLogger } from 'redux-logger'

const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
    predicate: () => typeof window !== 'undefined',
  }),
]

export { middleware }


// /* Core */
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';

// /* Custom Error Middleware */
// const errorMiddleware = (store: any) => (next: (arg0: any) => any) => (action: any) => {
//   try {
//     return next(action);
//   } catch (err) {
//     console.error('Middleware Error:', err);
//     // Optionally send error logs to a monitoring service here
//     throw err; // Re-throw error if needed
//   }
// };

// const customMiddleware = (store: any) => (next: (arg0: any) => any) => (action: { type: string | string[]; }) => {
//   // Example: Log only specific actions
//   if (action.type.includes('USER')) {
//     console.log('Custom Middleware:', action);
//   }
//   // Continue to the next middleware
//   return next(action);
// };

// /* Logger Middleware */
// const loggerMiddleware = createLogger({
//   duration: true,
//   timestamp: false,
//   collapsed: true,
//   colors: {
//     title: () => '#139BFE',
//     prevState: () => '#1C5FAF',
//     action: () => '#149945',
//     nextState: () => '#A47104',
//     error: () => '#ff0005',
//   },
//   predicate: () => typeof window !== 'undefined',
// });

// /* Middleware Array */
// const middleware = [
//   thunk, // Handles async actions
//   errorMiddleware, // Handles errors
//   customMiddleware, // Adds custom logic
//   loggerMiddleware, // Logs actions
// ];

// export { middleware };
