

const Education = () => {
  return (
    <div  className="text-justify bg-white dark:bg-[#171717] rounded-2xl mx-auto my-2 px-5 p-3 pb-8">
      <p className="mb-4 flex gap-1 text-[#7E7E7E]">Education</p>
      <div className="flex gap-6">
        <img src="/YorkU Logo.svg" width={80} alt="York University Logo" />
        <div>
          <p className="text-xl dark:text-white font-medium mb-1">Honors Bachelors of Computer Science </p>
          <p><strong>Faculty</strong>: Lassonde School of Engineering</p>
          <p><strong>Expected Graduation</strong>: May 2027</p>
        </div>
      </div>
    </div>
  )
}

export default Education
