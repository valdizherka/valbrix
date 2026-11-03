// Question and answer, always visible. No accordion: visible FAQ text did
// better in organic traffic than folded answers in a controlled test.
export default function FAQItem({ item }) {
  return (
    <div className="border-b border-gray-100 py-6">
      <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{item.question}</h3>
      <p className="text-gray-500 leading-relaxed">{item.answer}</p>
    </div>
  )
}
