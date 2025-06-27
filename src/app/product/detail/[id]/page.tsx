type Params = Promise<{ id: string }>
export default async function ProductDetail({ params }: { params: Params }) {
  const { id } = await params

  return (
    <main>
      <span>{id}</span>
    </main>
  )
}
