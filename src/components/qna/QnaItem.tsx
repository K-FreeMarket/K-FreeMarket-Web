export default function QnaItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className='rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-shadow duration-200 hover:shadow-md'>
      <div className='mb-3 flex items-start gap-2'>
        <p className='text-lg font-semibold text-gray-800'>Q. {question}</p>
      </div>
      <div className='flex items-start gap-2 pl-6'>
        <p className='leading-relaxed text-gray-700'>{answer}</p>
      </div>
    </div>
  )
}
