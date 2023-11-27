export default function Textarea() {
  return (
    <div>
      <textarea
        className='h-40 w-full rounded-2xl border-2 border-gray-200 p-2 focus:border-blue-900 focus:outline-none'
        placeholder='Type your message here...'
      ></textarea>
    </div>
  )
}
