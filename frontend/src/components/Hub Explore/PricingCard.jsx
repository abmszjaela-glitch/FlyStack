import React from 'react'

const PricingCard = () => {
  const [isAnnual, setIsAnnual] = React.useState(true);

    const pricingData = [
        { 
           name: 'Starter Hub',
            price: isAnnual ? 249 : 29,
            description: 'For independent agents and small travel operators.',
            features: [
                'Access to 50+ airline route APIs',
                'Basic flight search & filter tools',
                'Up to 500 booking queries/month',
                'Email support within 48 hrs'
            ]
        
        },
        { name: 'Pro Hub',
            mostPopular: true,
            price: isAnnual ? 699 : 79,
            description: 'For growing agencies managing high booking volume.',
            features: [
                'Unlimited airline route access',
                'Real-time seat availability sync',
                'Priority fare alerts & deal notifications',
                'Advanced analytics dashboard',
                'Multi-airline codeshare support',
                'Live chat support & onboarding call'
            ]   },
        {
            name: 'Enterprise Hub',
            price: isAnnual ? 1799 : 199,
            description: 'For large-scale platforms and airline partners.',
            features: [
                'Full white-label hub deployment',
                'Dedicated API rate limits & SLA',
                'Custom interline & alliance feeds',
                '24/7 dedicated support manager',
                'GDS & NDC integration support',
                'Custom reporting & data exports'
            ]    }

    ]

    return (
            <section className="flex w-full flex-col items-center bg-[#F5F9FC] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <h1 className='font-medium text-4xl md:text-[52px] text-slate-800 text-center'>Flexible Pricing Plans</h1>
                <p className='text-base/7 text-zinc-500 max-w-sm text-center mt-4'>Choose a plan that supports your airline platform growth and digital goals.</p>
                <div className='mt-6 flex bg-zinc-100 p-1.5 rounded-full'>
                    <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${!isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Annually</button>
                </div>
                <div className='mt-10 grid w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pricingData.map((item, index) => (
                        <div key={index} className={`w-full border border-zinc-200 rounded-2xl p-6 flex flex-col items-start transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-gray-100' : ''}`}>
                            <h1 className='font-medium text-3xl text-slate-800 mt-1'>{item.name}</h1>
                            <p className='text-sm text-zinc-500 mt-2'>{item.description}</p>
                            <h1 className='font-medium text-5xl text-slate-800 mt-6'>${item.price}</h1>
                            <button className={`w-full px-4 py-3 rounded-full cursor-pointer text-slate-600 text-sm mt-8 ${item.mostPopular ? 'bg-gray-800 hover:bg-gray-900 text-white' : 'border border-zinc-300/80 bg-zinc-100 hover:bg-zinc-200/70'}`}>
                                Get Started
                            </button>
                            <div className='w-full mt-8 space-y-2.5 pb-4'>
                                {item.features.map((feature, index) => (
                                    <p key={index} className='flex items-center gap-3 text-sm text-zinc-500'>
                                        <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0'>
                                            <span className='size-1.5 rounded-full bg-zinc-800' />
                                        </span>
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default PricingCard
