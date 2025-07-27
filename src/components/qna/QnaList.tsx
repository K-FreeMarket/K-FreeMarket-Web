import QnaItem from '@/components/qna/QnaItem'

export default function QnaList() {
  const qnaData = [
    {
      question: '문의는 어디로 하나요?',
      answer: '010-0000-0000으로 전화 주시거나, 카카오톡 채널로 문의해 주세요.',
    },
    {
      question: '배송은 얼마나 걸리나요?',
      answer: '평균 2~3일 소요되며, 도서산간 지역은 추가로 1~2일 정도 걸릴 수 있습니다.',
    },
    {
      question: '교환 및 반품은 어떻게 하나요?',
      answer: '상품 수령일로부터 7일 이내 마이페이지 > 주문내역에서 신청하실 수 있습니다.',
    },
    {
      question: '회원가입을 해야만 구매할 수 있나요?',
      answer: '비회원도 구매 가능하지만, 회원가입 시 더 많은 혜택을 받을 수 있습니다.',
    },
    {
      question: '쿠폰은 어디서 확인하나요?',
      answer: '마이페이지 > 쿠폰함에서 보유 중인 쿠폰을 확인하실 수 있습니다.',
    },
  ]
  return (
    <div className='w-full'>
      <h2 className='w-full text-start text-3xl font-bold'>자주 하는 질문 Q&A</h2>
      <hr className='mt-3 h-1 rounded-md border bg-black' />
      <div className='mt-6 flex flex-col gap-4'>
        {qnaData.map((item, idx) => (
          <QnaItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  )
}
