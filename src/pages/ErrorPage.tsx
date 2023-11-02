import Button from '../component/Button'

export default function ErrorPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-6 text-center'>
      <div className='font-Poppins text-5xl font-bold text-gray-100'>
        <h1>OOOOOPS!</h1>
        <h2 className='animate-bounce pt-5 text-5xl'>404</h2>
      </div>
      <p className='font-Assistant text-base text-gray-100'>Something wrong happened</p>
      <Button
        text='Go Back Home'
        path='/'
        className='w-64 bg-yellow-500 font-Poppins text-gray-100 hover:border-2 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500'
      />
    </div>
  )
}
