
interface TitleProps {
  title: string;
  subTitle: string;
  align?: 'left' | 'start';
}
const Title = ({ title, subTitle, align }: TitleProps) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === 'left' ? 'md:items-start' : 'md:items-left'}`}>
      <h2 className='text-4xl md:text-[40px] font-semibold'>{title}</h2>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>{subTitle}</p>
    </div>
  )
}

export default Title