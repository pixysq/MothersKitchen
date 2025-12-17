const ContactDetailsCard = ({ color, icon, title, desc }) => {
  return (
    <div
      className={`flex flex-col items-center justify-evenly rounded-xl border-4 border-b-8 border-r-8 border-black px-10 py-3 text-white ${color}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white">{icon}</div>
      <h3 className="py-2 text-center font-gluten text-2xl font-bold">{title}</h3>
      <p className="w-full break-words text-center font-lexend text-xs font-semibold leading-4">{desc}</p>
    </div>
  )
}

export default ContactDetailsCard
