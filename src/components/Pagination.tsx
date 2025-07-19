type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label='Page navigation' className='my-4'>
      <ul className='flex justify-center gap-1'>
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className='rounded border px-3 py-1 disabled:opacity-30'
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`rounded border px-3 py-1 ${
                currentPage === page ? 'bg-black text-white' : ''
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className='rounded border px-3 py-1 disabled:opacity-30'
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  )
}
