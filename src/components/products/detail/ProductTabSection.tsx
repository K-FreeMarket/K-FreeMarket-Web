'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import StarIcon from '@image/icons/star.svg'
import Pagination from '@/components/Pagination'

type Review = {
  id: number
  createdAt: string
  content: string
  rating: number
  user: string
  options?: string[]
}
type Question = {
  id: number
  title: string
  content: string
  is_private: boolean
  is_answered: boolean
  createAt: string
  user: string
}

type Answer = {
  questId: number
  content: string
  createAt: string
}

interface ProductTabSectionInterface {
  productDetailImage: string[] | StaticImageData[]
  reviews: Review[]
  questions: Question[]
  answers: Answer[]
}

export default function ProductTabSection({
  productDetailImage,
  reviews,
  questions,
  answers,
}: ProductTabSectionInterface) {
  const [activeTab, setActiveTab] = useState<'detail' | 'review' | 'qa'>('detail')
  const total = reviews.reduce((acc, cur) => acc + cur.rating, 0)
  const avgRating = Number((total / reviews.length).toFixed(1))

  const getRatingText = (rating: number) => {
    const ratingMap = {
      1: '별로예요',
      2: '그냥 그래요',
      3: '보통',
      4: '가성비 최고',
      5: '정말 좋아요!',
    }
    return ratingMap[rating as keyof typeof ratingMap] || ''
  }

  const [isWritingQuestion, setIsWritingQuestion] = useState(false)
  const [newQuestion, setNewQuestion] = useState({
    title: '',
    content: '',
    is_private: false,
  })

  const handleQuestionSubmit = () => {
    if (!newQuestion.title || !newQuestion.content) {
      alert('제목과 내용을 입력해주세요.')
      return
    }

    // 전송 로직 예: fetch('/api/question', { method: 'POST', body: JSON.stringify(newQuestion) })

    setNewQuestion({ title: '', content: '', is_private: false })
    setIsWritingQuestion(false)
  }

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 1

  return (
    <div className='mt-10 w-full'>
      {/* 탭 버튼 */}
      <div className='grid w-full grid-cols-3 border-b text-center font-semibold'>
        <button
          className={`py-2 ${activeTab === 'detail' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('detail')}
        >
          상세페이지
        </button>
        <button
          className={`py-2 ${activeTab === 'review' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          총 {reviews.length}개 리뷰
        </button>
        <button
          className={`py-2 ${activeTab === 'qa' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('qa')}
        >
          Q&A
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      <div className='mt-10'>
        {activeTab === 'detail' && (
          <div className='flex flex-col items-center justify-center'>
            {productDetailImage.map((img, index) => (
              <Image
                src={img}
                key={index}
                alt='대표 이미지'
                className='mb-5 rounded-md object-cover'
              />
            ))}
          </div>
        )}

        {activeTab === 'review' && (
          <div className='w-full'>
            <div className='grid grid-cols-6'>
              <div className='col-span-2 flex flex-col items-center justify-center border-r-2 border-gray-300'>
                <div className='flex items-center justify-center gap-3'>
                  <div className='h-10 w-10 text-yellow-500'>
                    <StarIcon />
                  </div>
                  <span className='text-2xl font-semibold'>{avgRating}</span>
                </div>
                <p className='mb-3 text-lg font-semibold'> 리뷰 (총 {reviews.length}건)</p>
              </div>
              <div className='col-span-4 flex flex-col justify-center px-4'>
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = reviews.filter((r) => r.rating === rating).length
                  const percent = Math.round((count / reviews.length) * 100)

                  return (
                    <div key={rating} className='mb-2 flex items-center'>
                      <span className='w-24 text-sm font-medium'>{getRatingText(rating)}</span>
                      <div className='mx-2 h-2 flex-1 rounded-full bg-gray-200'>
                        <div
                          className='h-full rounded-full bg-black'
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className='w-10 text-right text-sm text-gray-600'>{count}건</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <hr className='mt-10 text-gray-400' />

            {reviews.map((r) => (
              <div
                className='grid h-36 w-full grid-cols-5 items-center border-b border-gray-400 p-8'
                key={r.id}
              >
                <div className='col-span-4 h-full border-r-2 border-gray-400 pr-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex'>
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <div className='h-5 w-5 text-yellow-500' key={i}>
                          <StarIcon />
                        </div>
                      ))}
                      <span className='ml-5 font-semibold'>{getRatingText(r.rating)}</span>
                    </div>
                    <span className='text-end text-xs text-gray-500'>{r.createdAt}</span>
                  </div>
                  <p className='mt-2 text-sm text-gray-700'>{r.content}</p>
                </div>

                <div className='col-span-1 flex flex-col items-start justify-center px-4'>
                  <span className='mb-1 text-xs text-gray-500'>
                    {r.user[0] + '*'.repeat(r.user.length - 1)} 님의 리뷰
                  </span>
                  {r.options?.map((opt, i) => (
                    <span key={i} className='text-xs text-gray-600'>
                      - {opt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'qa' && (
          <div className='w-full px-2'>
            <p className='mb-6 text-center text-lg font-semibold'>상품 Q&A</p>

            {/* 질문하기 버튼 및 폼 */}
            <div className='mb-6 rounded-md bg-white p-4 text-end'>
              {!isWritingQuestion ? (
                <button
                  onClick={() => setIsWritingQuestion(true)}
                  className='rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800'
                >
                  질문하기
                </button>
              ) : (
                <div>
                  <input
                    type='text'
                    placeholder='제목을 입력하세요'
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                    className='mb-2 w-full rounded border px-2 py-1 text-sm'
                  />
                  <textarea
                    placeholder='질문 내용을 입력하세요.'
                    value={newQuestion.content}
                    onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                    className='mb-2 h-24 w-full rounded border px-2 py-1 text-sm'
                  />
                  <div className='mb-2 flex items-center gap-2'>
                    <input
                      id='private'
                      type='checkbox'
                      checked={newQuestion.is_private}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, is_private: e.target.checked })
                      }
                    />
                    <label htmlFor='private' className='text-sm text-gray-700'>
                      비공개 질문
                    </label>
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={handleQuestionSubmit}
                      className='rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800'
                    >
                      등록
                    </button>
                    <button
                      onClick={() => setIsWritingQuestion(false)}
                      className='rounded border px-4 py-2 text-sm text-gray-600 hover:bg-gray-200'
                    >
                      취소
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className='flex flex-col gap-4'>
              {questions.map((q) => {
                const answer = answers.find((a) => a.questId === q.id)
                const isAnswered = !!answer
                const maskedUser = q.user[0] + '*'.repeat(q.user.length - 1)

                return (
                  <div
                    key={q.id}
                    className='rounded-md border border-gray-200 bg-white p-4 shadow-sm'
                  >
                    <div className='mb-2 flex items-center justify-between border-b pb-2'>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>{q.title}</span>
                        <span className='mt-1 text-xs text-gray-500'>
                          {maskedUser} · {q.createAt}
                        </span>
                      </div>
                      <div className='text-sm'>
                        {isAnswered ? (
                          <span className='font-medium text-green-600'>답변 완료</span>
                        ) : (
                          <span className='text-gray-400'>미답변</span>
                        )}
                      </div>
                    </div>

                    <div className='mb-2'>
                      {q.is_private ? (
                        <span className='text-gray-400 italic'>비밀글입니다.</span>
                      ) : (
                        <p className='text-sm text-gray-800'>{q.content}</p>
                      )}
                    </div>

                    {isAnswered && (
                      <div className='mt-3 rounded-md bg-gray-50 p-3'>
                        <p className='mb-1 text-xs font-medium text-gray-500'>답변</p>
                        {q.is_private ? (
                          <span className='text-gray-400 italic'>비밀글입니다.</span>
                        ) : (
                          <p className='text-sm text-gray-700'>{answer.content}</p>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {(activeTab === 'qa' || activeTab === 'review') && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  )
}
