const GoalsCard = () => {
    return (
        <div className="bg-white dark:bg-[#171717] rounded-2xl mx-auto my-2 p-5 pt-3 pb-8 text-left">
            <p className="mb-4 text-[#7E7E7E]">Goals</p>

            <div className="space-y-8">
                <div>
                    <p className="text-xl dark:text-white font-medium mb-3">
                        Communication Skills
                    </p>

                    <div>
                        <ul className="list-disc ml-4">
                            <li className="mb-4">
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 1
                                </p>
                                <p>
                                    By August 31, 2026, improve my ability to convey
                                    complex technical ideas clearly during team
                                    discussions by breaking concepts into simple,
                                    direct steps and evaluating progress during
                                    weekly supervisor 1-on-1s.
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    Continuously tracking feedback during weekly
                                    syncs and refining technical explanations for
                                    both engineering and non-technical stakeholders.
                                </p>
                            </li>

                            <li>
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 2
                                </p>
                                <p>
                                    By July 31, 2026, master writing clear,
                                    professional Linear project tickets using
                                    software design principles, aiming for at least
                                    90% supervisor approval without requiring
                                    follow-up clarification.
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    Achieved. Ticket documentation standards were
                                    established, resulting in clear scope definition
                                    and smooth issue handoffs.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="text-xl dark:text-white font-medium mb-3">
                        Curiosity &amp; Imagination
                    </p>

                    <div>
                        <ul className="list-disc ml-4">
                            <li className="mb-4">
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 1
                                </p>

                                <p>
                                    By August 31, 2026, ask more meaningful
                                    questions when learning new concepts by logging
                                    technical questions in a dedicated notebook and
                                    reviewing them during weekly syncs.
                                </p>

                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    Maintaining active engineering task notes to
                                    track core purposes and expected outcomes before
                                    diving into implementation.
                                </p>
                            </li>

                            <li>
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 2
                                </p>

                                <p>
                                    By July 31, 2026, research and document at least
                                    two potential technical solutions with pros and
                                    cons for every major programming task before
                                    presenting options to my supervisor.
                                </p>

                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    Achieved. Regularly comparing trade-offs between
                                    architectural approaches before feature
                                    implementation.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="text-xl dark:text-white font-medium mb-3">
                        Critical Thinking &amp; Problem-Solving
                    </p>

                    <div>
                        <ul className="list-disc ml-4">
                            <li className="mb-4">
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 1
                                </p>

                                <p>
                                    By August 15, 2026, logically break down complex
                                    software errors into manageable troubleshooting
                                    steps and share diagnostic reasoning during code
                                    reviews.
                                </p>

                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    In progress. Using systematic root-cause
                                    analysis to isolate bug origins before
                                    submitting pull requests.
                                </p>
                            </li>

                            <li>
                                <p className="font-semibold dark:text-white">
                                    SMART Goal 2
                                </p>

                                <p>
                                    By June 15, 2026, transition to evidence-based
                                    debugging using official documentation, issue
                                    logs, and Linear tickets while maintaining a
                                    weekly engineering log.
                                </p>

                                <p className="mt-1">
                                    <span className="font-semibold underline">
                                        Progress Update:
                                    </span>{" "}
                                    Achieved. Successfully built an engineering log
                                    habit to document root causes and evidence before
                                    writing fixes.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalsCard;