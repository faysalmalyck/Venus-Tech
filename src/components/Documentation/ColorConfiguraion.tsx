export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=' text-black text-xl font-semibold mt-8 dark:text-white'>
        Colors
      </h3>
      <div className='p-6 rounded-md border mt-4 border-border dark:border-dark_border'>
        <p className='text-base font-medium text-midnight_text dark:text-white/50'>
          <span className='font-semibold text-lg dark:text-white'>
            1. Override Colors
          </span>{' '}
          <br />
          For any change in colors : src/utils/extendedConfig.ts
        </p>
        <div className='py-4 px-5 rounded-md bg-black mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>--color-primary: #8b5cf6;</span>
            <span>--color-secondary: #64748b;</span>
            <span>--color-midnight_text: #111827;</span>
            <span>--color-grey: #64748b;</span>
            <span>--color-border: rgba(15, 23, 42, 0.12);</span>
            <span>--color-success: #f5c542;</span>
            <span>--color-aqua: #22d3ee;</span>
            <span>--color-section: #f7f5ff;</span>
            <span>--color-darkmode: #070a12;</span>
            <span>--color-darklight: #101827;</span>
            <span>--color-dark_border: rgba(255, 255, 255, 0.12);</span>
            <span>--color-Sky-blue-mist: #22d3ee;</span>
          </p>
        </div>
      </div>
      <div className='p-6 rounded-md border mt-4 border-border dark:border-dark_border'>
        <p className='text-base font-medium text-midnight_text dark:text-white/50'>
          <span className='font-semibold text-lg dark:text-white'>
            2. Override Theme Colors
          </span>{' '}
          <br />
          For change , go to : src/utils/extendedConfig.ts
        </p>
        <div className='py-4 px-5 rounded-md bg-black mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>primary: "#8B5CF6",</span>
            <span>secondary: "#64748B",</span>
          </p>
        </div>
      </div>
    </>
  )
}
