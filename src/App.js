import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';




function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </QueryClientProvider>

  );
}

export default App;
