

export const BtnPrimary = ({text}) => {
  return (
    <button className="bg-gray-800 text-gray-50 py-1 px-4  rounded-full hover:bg-gray-700 flex items-center space-x-2">
    <span>{text}</span>
  </button>
  )
}
export default BtnPrimary