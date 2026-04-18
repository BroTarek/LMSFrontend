import React from 'react'

const AccordionItem = () => {
    return (
        <>
            <div className="accordion-item border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm active"
                data-purpose="lesson-row">
                <button
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => { }} >
                    <div className="flex items-center gap-4">
                        <span
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-wisdom-blue text-white text-xs font-bold"
                        >01</span>
                        <span className="font-bold text-wisdom-blue" >Introduction to English
                            Basics</span>
                    </div>
                    <svg className="chevron-icon w-5 h-5 text-gray-400 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"></path>
                    </svg>
                </button>
                <div className="accordion-content border-t border-gray-100">
                    <div className="p-6">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4" >
                            In this opening lesson, we cover the core fundamental structures of the English
                            language. We will focus on basic greetings, the alphabet, and common sentence
                            structures used in daily life.
                        </p>
                        <a className="inline-flex items-center gap-2 text-xs font-bold text-wisdom-blue hover:underline"
                            href="#" >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            DOWNLOAD PDF RESOURCES
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionItem