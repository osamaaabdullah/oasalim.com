
const Experience = () => {
    return (
        <div className="text-justify bg-white dark:bg-[#171717] rounded-2xl mx-auto my-2 pl-5 p-3 pb-8">
            <p className="mb-4 flex gap-1 text-[#7E7E7E]">Experience</p>
            <div className="flex gap-6">
                <img src="/Vero Logo.svg" width={80} alt="York University Logo" />
                <div>
                    <p className="text-xl dark:text-white font-medium mb-1">Vero</p>
                    <p>Software Engineering Intern</p>
                    <p>June 2026 - Present</p>
                    <p>
                        <ul className="list-disc ml-4">
                            <li>Built an autofill system with email validation for patient notes, reducing input errors and eliminating manual entry across critical fields</li>
                            <li>Engineered a bulk CSV patient import system, streamlining cohort onboarding and dramatically reducing manual data entry for physicians</li>
                            <li>Architected AI-powered custom section fields to automatically extract supplementary patient data, expanding clinical note flexibility without increasing manual input</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="flex gap-6 mt-8">
                <img src="/YorkU Logo.svg" width={80} alt="York University Logo" />
                <div>
                    <p className="text-xl dark:text-white font-medium mb-1">York University</p>
                    <p>Data Analyst Research Assistant</p>
                    <p>September 2025 - April 2026</p>
                    <p>
                        <ul className="list-disc ml-4">
                            <li>Validated data integrity across 1.3M+ patent records using Pandas, resolving missing values and format inconsistencies
                                before ML pipeline ingestion</li>
                            <li>Optimized query performance using indexing and query refactoring, reducing execution time from 150ms to 80ms</li>
                            <li>Classified 1.3M+ AI patent records into 8 categories, producing a structured dataset for downstream research pipelines</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Experience
