'use client'

import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import { FadeIn } from '@/components/FadeIn'
import { Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch" subtitle="Ready to modernize your lending operation? Let's talk." breadcrumb={{ label: 'Contact', href: '/contact' }} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you within one business day.</p>
                <ContactForm />
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2}>
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Email</p>
                        <p className="text-sm text-slate-600">sales@adamaslos.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-navy-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Location</p>
                        <p className="text-sm text-slate-600">Fullerton, California</p>
                      </div>
                    </div>
                  </div>
                  <hr className="my-6 border-slate-200" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Request a Live Demo</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Want to see Adamas LOS in action? Select &ldquo;Request a Demo&rdquo; in the form and our team will schedule a personalized walkthrough of the platform.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
