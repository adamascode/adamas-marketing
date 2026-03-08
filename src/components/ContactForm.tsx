'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().optional(),
  interest: z.string().min(1, 'Please select an interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const interests = ['Request a Demo', 'Pricing Information', 'Technical Questions', 'Partnership Inquiry', 'General Question']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
          <CheckCircle2 className="h-8 w-8 text-teal-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
        <p className="text-slate-600 max-w-md mx-auto">We&apos;ve received your message and will get back to you within one business day.</p>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-2.5 rounded-md border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input id="name" type="text" {...register('name')} className={inputClass} placeholder="John Smith" />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Work Email *</label>
          <input id="email" type="email" {...register('email')} className={inputClass} placeholder="john@company.com" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
          <input id="company" type="text" {...register('company')} className={inputClass} placeholder="Acme Lending" />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
          <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="(555) 123-4567" />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1.5">I&apos;m interested in... *</label>
        <select id="interest" {...register('interest')} className={inputClass} defaultValue="">
          <option value="" disabled>Select an option</option>
          {interests.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
        </select>
        {errors.interest && <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
        <textarea id="message" rows={4} {...register('message')} className={`${inputClass} resize-none`} placeholder="Tell us about your lending operation and how we can help..." />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-500 transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed">
        <Send className="h-4 w-4" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
